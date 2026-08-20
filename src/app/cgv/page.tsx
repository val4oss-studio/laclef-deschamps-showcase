import type { JSX } from 'react';
import type { Metadata } from 'next';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Conditions générales de vente',
  description: 'Conditions générales de vente de La Clef Deschamps, conciergerie à Châtelaillon-Plage.',
  alternates: {
    canonical: `${site.url}/cgv`,
  },
};

// TODO: gabarit vide — le contenu juridique reste à rédiger.
export default function CgvPage(): JSX.Element {
  return <section id="cgv" className="section section--first" />;
}
