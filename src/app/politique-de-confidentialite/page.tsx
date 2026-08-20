import type { JSX } from 'react';
import type { Metadata } from 'next';
import { LegalSection } from '@/app/component/section';
import { confidentialite } from '@/config/legal';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Traitement des données personnelles par La Clef Deschamps, ' +
    'conciergerie à Châtelaillon-Plage.',
  alternates: {
    canonical: `${site.url}/politique-de-confidentialite`,
  },
  robots: { index: true, follow: false },
};

export default function PolitiqueDeConfidentialitePage(): JSX.Element {
  return <LegalSection id="politique-de-confidentialite" document={confidentialite} />;
}
