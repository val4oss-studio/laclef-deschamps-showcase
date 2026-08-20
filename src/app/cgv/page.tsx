import type { JSX } from 'react';
import type { Metadata } from 'next';
import { LegalSection } from '@/app/component/section';
import { cgv } from '@/config/legal';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Conditions générales de vente',
  description:
    'Conditions générales de vente de La Clef Deschamps, ' +
    'conciergerie à Châtelaillon-Plage.',
  alternates: {
    canonical: `${site.url}/cgv`,
  },
  robots: { index: true, follow: false },
};

export default function CgvPage(): JSX.Element {
  return <LegalSection id="cgv" document={cgv} />;
}
