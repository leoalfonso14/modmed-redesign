import { ComingSoonPage } from '../../../components/ComingSoonPage';
import { SEO } from '../../../components/ui/SEO';

export function BlogPage() {
  return (
    <>
      <SEO 
        title="ModMed Blog | Healthcare Insights" 
        description="Practical advice, clinical perspectives, and healthcare technology insights from the experts at ModMed."
      />
      <ComingSoonPage
        badge="Blog"
        title="Insights for the Modern Practice"
        description="Practical advice, clinical perspectives, and healthcare technology insights — written by the people building and using ModMed every day."
      />
    </>
  );
}
