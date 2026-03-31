import { Hero } from '../../components/Hero';
import { AIScribe } from '../../components/AIScribe';
import { Solutions } from '../../components/Solutions';
import { SpecialtyGrid } from '../../components/SpecialtyGrid';
import { Stats } from '../../components/Stats';

export function HomePage() {
  return (
    <>
      <Hero />
      <AIScribe />
      <Solutions />
      <SpecialtyGrid />
      <Stats />
    </>
  );
}
