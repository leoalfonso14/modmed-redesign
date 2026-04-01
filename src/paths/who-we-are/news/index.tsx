import { ComingSoonPage } from '../../../components/ComingSoonPage';
import { SEO } from '../../../components/ui/SEO';

export function NewsPage() {
  return (
    <>
      <SEO 
        title="News & Press Releases" 
        description="Stay updated with the latest news, press releases, and industry announcements from ModMed."
      />
      <ComingSoonPage
        badge="News & Press"
        title="ModMed in the News"
        description="Press releases, industry coverage, and announcements from the team building the future of specialty healthcare."
      />
    </>
  );
}
