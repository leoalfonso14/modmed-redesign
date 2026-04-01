import { ComingSoonPage } from '../../../../components/ComingSoonPage';
import { SEO } from '../../../../components/ui/SEO';

export function ScribePage() {
  return (
    <>
      <SEO 
        title="ModMed Scribe 2.0 | AI Documentation" 
        description="Experience the future of clinical documentation with Scribe 2.0. Our AI listens to natural patient conversations and generates structured clinical notes."
      />
      <ComingSoonPage
        badge="ModMed Scribe 2.0"
        title="Your AI-Powered Clinical Documentation Solution"
        description="Listens like a human. Documents like a scribe. Trained on 750M+ patient encounters — Scribe 2.0 translates natural conversation into clinical action."
      />
    </>
  );
}
