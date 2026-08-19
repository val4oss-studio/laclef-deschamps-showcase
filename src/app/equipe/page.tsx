import type { JSX } from 'react';
import type { Metadata } from 'next';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Équipe',
  description: `Rencontrez l'équipe de ${site.name} à Châtelaillon-Plage.`,
  alternates: {
    canonical: `${site.url}/equipe`,
  },
};

export default function EquipePage(): JSX.Element {
  return <section id="equipe" className="section section--first" />;
}
