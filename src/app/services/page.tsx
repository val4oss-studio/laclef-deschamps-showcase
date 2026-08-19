import type { Metadata } from 'next';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Nos services',
  description:
    `Découvrez les services de conciergerie proposés par ${site.name} ` +
    'à Châtelaillon-Plage.',
  alternates: {
    canonical: `${site.url}/nos-services`,
  },
};

export default function NosServicesPage() {
  return <section id="nos-services" className="section section--first" />;
}
