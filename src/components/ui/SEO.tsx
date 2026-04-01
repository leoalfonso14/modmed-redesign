import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  suffix?: string;
}

export function SEO({ title, description, suffix = ' | ModMed' }: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title}${suffix}`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'ModMed redesigned for the future of specialty healthcare.');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = description || 'ModMed redesigned for the future of specialty healthcare.';
      document.head.appendChild(newMeta);
    }
  }, [title, description, suffix]);

  return null;
}
