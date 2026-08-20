import type { JSX } from 'react';
import type { Metadata } from 'next';
import { ServicesSection } from '@/app/component/section';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Nos services',
  description:
    `Découvrez les services de conciergerie proposés par ${site.name} ` +
    'à Châtelaillon-Plage.',
  alternates: {
    canonical: `${site.url}/services`,
  },
};

export default function NosServicesPage(): JSX.Element {
  return <ServicesSection id="services" />;
}
