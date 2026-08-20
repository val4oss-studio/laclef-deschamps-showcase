import type { JSX } from 'react';
import type { Metadata } from 'next';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site La Clef Deschamps, conciergerie à Châtelaillon-Plage.',
  alternates: {
    canonical: `${site.url}/mentions-legales`,
  },
};

// TODO: gabarit vide — le contenu juridique reste à rédiger.
export default function MentionsLegalesPage(): JSX.Element {
  return <section id="mentions-legales" className="section section--first" />;
}
