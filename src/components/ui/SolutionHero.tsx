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
      className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-white"
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="aspect-video rounded-[48px] bg-slate-50 border border-slate-100 shadow-2xl relative overflow-hidden group">
            {/* Simulation of a 3D interface */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(80,45,127,0.05),transparent)] pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon className="w-32 h-32 text-brand-purple/20 animate-pulse" />
            </div>

            {/* Parallax UI Cards */}
            <motion.div
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
              className="absolute top-12 left-12 w-64 p-6 bg-white rounded-3xl shadow-xl border border-slate-100"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center mb-4 text-brand-purple">
                <Icon className="w-5 h-5" />
              </div>
              <div className="h-2 w-3/4 bg-slate-100 rounded mb-2" />
              <div className="h-2 w-1/2 bg-slate-50 rounded" />
            </motion.div>

            <motion.div
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
              className="absolute bottom-12 right-12 w-72 p-6 bg-white rounded-3xl shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <span className="text-[10px] font-bold">98%</span>
                </div>
                <div className="text-slate-500 font-bold text-[10px] tracking-widest uppercase">
                  750M Encounters Trained Analytics
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-slate-100 rounded" />
                <div className="h-2 w-full bg-slate-100 rounded" />
                <div className="h-2 w-2/3 bg-slate-50 rounded" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
