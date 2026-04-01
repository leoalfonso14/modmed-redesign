import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

// Declare Wistia types
declare global {
  interface Window {
    _wq: Array<{
      id: string;
      onReady: (video: {
        play: () => Promise<void>;
        pause: () => void;
        muted: (muted: boolean) => void;
      }) => void;
    }>;
  }
}

type VideoProps = {
  src?: string;
  wistiaId?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
  fallback?: React.ReactNode;
} & ({ src: string } | { wistiaId: string });

export const Video = (props: VideoProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wistiaVideoRef = useRef<any>(null);

  // Sync mute state reactively
  useEffect(() => {
    if (props.wistiaId && wistiaVideoRef.current) {
      wistiaVideoRef.current.muted(props.muted);
    } else if (videoRef.current) {
      videoRef.current.muted = props.muted || false;
    }
  }, [props.muted, props.wistiaId]);

  useEffect(() => {
    if (!props?.wistiaId || !props.autoPlay) return;
    if (!iframeRef.current) return;

    // Load Wistia embed script if not already loaded (needed for API)
    const loadWistiaScript = (): Promise<void> => {
      return new Promise((resolve) => {
        const existingScript = document.querySelector(
          'script[src*="fast.wistia.com/assets/external/E-v1.js"]'
        );
        if (existingScript) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = "https://fast.wistia.com/assets/external/E-v1.js";
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => resolve(); // Resolve anyway to continue
        document.head.appendChild(script);
      });
    };

    // Initialize Wistia queue if it doesn't exist
    window._wq = window._wq || [];

    // Wait for iframe to load before setting up Wistia API
    const setupWistiaVideo = () => {
      // Add video to Wistia queue to handle when it's ready
      window._wq.push({
        id: props.wistiaId!,
        onReady: (video) => {
          // Store handle for reactive sync
          wistiaVideoRef.current = video;

          // Initial sync
          if (props.muted !== undefined) {
            video.muted(props.muted);
          }
          
          if (
            props.loop &&
            "loop" in video &&
            typeof (video as { loop?: (value: boolean) => void }).loop ===
              "function"
          ) {
            (video as { loop: (value: boolean) => void }).loop(true);
          }
          // Programmatically play the video
          if (props.autoPlay) {
            video.play().catch(() => {
              // Autoplay might be blocked, but that's okay
            });
          }
        },
      });
    };

    const iframeElement = iframeRef.current;
    let iframeLoadHandler: (() => void) | null = null;

    loadWistiaScript().then(() => {
      // Set up immediately (Wistia queue handles timing)
      setupWistiaVideo();

      // Also try after iframe loads as a fallback
      if (iframeElement) {
        iframeLoadHandler = () => {
          setTimeout(() => {
            setupWistiaVideo();
          }, 100);
        };

        try {
          if (iframeElement.contentDocument?.readyState === "complete") {
            iframeLoadHandler();
          } else {
            iframeElement.addEventListener("load", iframeLoadHandler);
          }
        } catch {
          iframeElement.addEventListener("load", iframeLoadHandler);
        }
      }
    });

    // Cleanup function
    return () => {
      if (iframeElement && iframeLoadHandler) {
        iframeElement.removeEventListener("load", iframeLoadHandler);
      }
      if (window._wq && props.wistiaId) {
        window._wq = window._wq.filter((item) => item.id !== props.wistiaId);
      }
      wistiaVideoRef.current = null;
    };
  }, [props.wistiaId, props.autoPlay, props.muted, props.loop]);

  const iframeSrc = props?.wistiaId
    ? `https://fast.wistia.net/embed/iframe/${props.wistiaId}?fitStrategy=cover`
    : undefined;

  return (
    <>
      {props?.wistiaId ? (
        <iframe
          ref={iframeRef}
          src={iframeSrc}
          allow="autoplay; fullscreen"
          allowFullScreen
          className={cn("size-full", props.className)}
        />
      ) : (
        <video
          ref={videoRef}
          src={props.src}
          autoPlay={props.autoPlay || false}
          loop={props.loop || false}
          muted={props.muted || false}
          controls={props.controls || undefined}
          className={cn("size-full", props.className)}
          playsInline
        />
      )}
    </>
  );
};
