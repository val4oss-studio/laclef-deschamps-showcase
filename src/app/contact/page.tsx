import type { JSX } from 'react';
import type { Metadata } from 'next';
import { ContactSection, LocationSection } from '@/app/component/section';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contactez ${site.name}, conciergerie à Châtelaillon-Plage.`,
  alternates: {
    canonical: `${site.url}/contact`,
  },
};

export default function ContactPage(): JSX.Element {
  return (
    <>
      <ContactSection id="contact" />
      <LocationSection id="localisation" />
    </>
  );
}
