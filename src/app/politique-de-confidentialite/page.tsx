import type { JSX } from 'react';
import type { Metadata } from 'next';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Traitement des données personnelles par La Clef Deschamps, conciergerie à Châtelaillon-Plage.',
  alternates: {
    canonical: `${site.url}/politique-de-confidentialite`,
  },
};

// TODO: gabarit vide — le contenu juridique reste à rédiger.
export default function PolitiqueDeConfidentialitePage(): JSX.Element {
  return <section id="politique-de-confidentialite" className="section section--first" />;
}
