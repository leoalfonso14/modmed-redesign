import { ComingSoonPage } from '../../components/ComingSoonPage';
import { SEO } from '../../components/ui/SEO';

export function ResourcesPage() {
  return (
    <>
      <SEO 
        title="Knowledge Hub & Resources" 
        description="Access ModMed's knowledge hub for the latest blogs, whitepapers, success stories, and webinars in specialty medicine."
      />
      <ComingSoonPage
        badge="Resources"
        title="The ModMed Knowledge Hub"
        description="Blogs, whitepapers, success stories, webinars, and FAQs — everything you need to get the most out of your practice and stay ahead in specialty medicine."
      />
    </>
  );
}
