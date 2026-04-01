import { ComingSoonPage } from '../../../components/ComingSoonPage';
import { SEO } from '../../../components/ui/SEO';

export function CareersPage() {
  return (
    <>
      <SEO 
        title="Careers | Join the ModMed Team" 
        description="Build the future of healthcare technology with us. Explore career opportunities at ModMed and help us transform specialty medicine."
      />
      <ComingSoonPage
        badge="Careers"
        title="Join the ModMed Team"
        description="We're building the future of healthcare technology. If you're passionate about meaningful work that restores the doctor-patient relationship, we want to hear from you."
      />
    </>
  );
}
