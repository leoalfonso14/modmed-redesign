import { Hero } from '../../components/Hero';
import { AIScribe } from '../../components/AIScribe';
import { Solutions } from '../../components/Solutions';
import { SpecialtyGrid } from '../../components/SpecialtyGrid';
import { Stats } from '../../components/Stats';
import { SEO } from '../../components/ui/SEO';

export function HomePage() {
  return (
    <>
      <SEO 
        title="Modern Healthcare Solutions" 
        description="Redesigning the future of specialty healthcare with cloud-based EHR, practice management, and AI-powered documentation."
      />
      <Hero />
      <AIScribe />
      <Solutions />
      <SpecialtyGrid />
      <Stats />
    </>
  );
}
