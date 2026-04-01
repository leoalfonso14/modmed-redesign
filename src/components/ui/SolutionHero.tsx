import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Badge } from "./Badge";
import { GradientText } from "./GradientText";
import { Button } from "./Button";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router";

interface SolutionHeroProps {
  badge: string;
  title: string;
  description: string;
  icon: LucideIcon;
  primaryCTA?: { title: string; url: string };
  secondaryCTA?: { title: string; url: string };
  imageSrc?: string;
}

export function SolutionHero({
  badge,
  title,
  description,
  icon: Icon,
  primaryCTA = { title: "Book a Demo", url: "/contact" },
  secondaryCTA = { title: "Watch Video", url: "/contact" },
}: SolutionHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-24 px-6 overflow-hidden bg-white"
    >
      {/* Parallax Background Glows */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[140px] -z-10 pointer-events-none"
      />
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]),
          opacity,
        }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div style={{ scale, opacity }}>
          <Badge
            variant="glow"
            className="mb-8 uppercase tracking-[0.2em] font-black"
          >
            {badge}
          </Badge>
          <div className="flex items-center justify-center mb-8">
            <div className="p-4 rounded-3xl bg-brand-purple/5 border border-brand-purple/10">
              <Icon className="w-12 h-12 text-brand-purple/40" />
            </div>
          </div>
          <h1 className="text-5xl sm:text-8xl font-black text-slate-950 mb-8 tracking-tighter leading-[0.9]">
            {title.split(" ").map((word, i) => (
              <span key={i}>
                {i === 1 ? <GradientText>{word}</GradientText> : word}{" "}
              </span>
            ))}
          </h1>
          <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
            <Link to={primaryCTA.url}>
              <Button size="lg">{primaryCTA.title}</Button>
            </Link>
            <Link to={secondaryCTA.url}>
              <Button variant="secondary" size="lg">
                {secondaryCTA.title}
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Floating Interactive 3D Module Placeholder */}
      </div>
    </section>
  );
}
