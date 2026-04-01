import { ComingSoonPage } from '../../../components/ComingSoonPage';
import { SEO } from '../../../components/ui/SEO';

export function WebinarsPage() {
  return (
    <>
      <SEO 
        title="Webinars & Learning Sessions" 
        description="Join our live and on-demand webinars to learn from specialty healthcare experts. Insights on EHR optimization, billing, and AI documentation."
      />
      <ComingSoonPage
        badge="Webinars"
        title="Learn from the Experts"
        description="Live and on-demand webinars covering EHR optimization, AI documentation, practice management, billing best practices, and specialty clinical topics."
      />
    </>
  );
}
