import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { Video } from './Video';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
  wistiaId?: string;
  title?: string;
}

export function VideoModal({ isOpen, onClose, videoSrc, wistiaId, title }: VideoModalProps) {

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-3xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20, rotateX: -10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl aspect-video rounded-[32px] sm:rounded-[48px] overflow-hidden bg-slate-900 shadow-[0_0_100px_rgba(80,45,127,0.3)] border border-white/10 preserve-3d p-4 sm:p-6"
          >
            {/* Ambient Pulsing Glow (Bezel background) */}
            <div className="absolute inset-0 bg-linear-to-br from-brand-purple/20 via-transparent to-brand-purple/5 animate-pulse-slow pointer-events-none" />

            {/* Inner Video 'Screen' */}
            <div className="relative w-full h-full rounded-[16px] sm:rounded-[24px] overflow-hidden bg-black shadow-2xl ring-1 ring-white/10 z-10 flex flex-col">
              
              {/* Video Primitive */}
              <div className="absolute inset-0 z-0">
                <Video 
                  src={videoSrc || ""}
                  wistiaId={wistiaId}
                  autoPlay={true}
                  loop={!wistiaId} // Loop for HTML5, Wistia follows player settings
                  muted={false}
                  controls={!!wistiaId} // Let Wistia handle its own controls
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Header Badge - Top Left */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
                <div className="px-4 py-2 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-brand-purple animate-ping" />
                  Featured Focus
                </div>
              </div>

              {/* Close Button - Top Right */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-30">
                <button
                  onClick={onClose}
                  className="w-12 h-12 rounded-2xl bg-slate-950/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-center shadow-lg transform hover:scale-110 hover:bg-brand-purple transition-all active:scale-95 group"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Controls Overlay (Title Only) */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent flex justify-between items-center pointer-events-none z-20 pb-16 sm:pb-20">
                <div className="flex flex-col gap-1 transition-opacity duration-300">
                  {title && (
                    <span className="text-[10px] font-black text-brand-purple-light uppercase tracking-[0.3em] drop-shadow-md">
                      Now Playing
                    </span>
                  )}
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight drop-shadow-lg">
                    {title || 'Launch Presentation'}
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
