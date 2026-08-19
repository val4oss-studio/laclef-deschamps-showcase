import type { JSX } from 'react';
import type { Metadata } from 'next';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Tarifs',
  description:
    `Les tarifs de conciergerie de ${site.name} pour la location courte ` +
    'durée à Châtelaillon-Plage.',
  alternates: {
    canonical: `${site.url}/tarifs`,
  },
};

export default function TarifsPage(): JSX.Element {
  return <section id="tarifs" className="section section--first" />;
}
