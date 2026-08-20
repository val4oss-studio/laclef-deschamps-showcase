import type { JSX } from 'react';
import type { Metadata } from 'next';
import { GallerySection, TeamSection } from '@/app/component/section';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Notre équipe',
  description:
    `Rencontrez l'équipe de ${site.name}, conciergerie familiale ` +
    'à Châtelaillon-Plage.',
  alternates: {
    canonical: `${site.url}/equipe`,
  },
};

export default function EquipePage(): JSX.Element {
  return (
    <>
      <TeamSection id="equipe" />
      <GallerySection id="galerie" />
    </>
  );
}
