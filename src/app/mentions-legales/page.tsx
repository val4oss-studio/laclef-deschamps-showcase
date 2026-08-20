import type { JSX } from 'react';
import type { Metadata } from 'next';
import { LegalSection } from '@/app/component/section';
import { mentionsLegales } from '@/config/legal';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site La Clef Deschamps, conciergerie à Châtelaillon-Plage.',
  alternates: {
    canonical: `${site.url}/mentions-legales`,
  },
  robots: { index: true, follow: false },
};

export default function MentionsLegalesPage(): JSX.Element {
  return <LegalSection id="mentions-legales" document={mentionsLegales} />;
}
