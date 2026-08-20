import type { JSX } from 'react';
import {
  HeroSection,
  ServicesSection,
  AvisSection,
  CouchantSection,
} from '@/app/component/section';

export default function HomePage(): JSX.Element {
  return (
    <>
      <HeroSection id="hero" />
      {/* Filet or + demi-soleil : passage de la section claire à la section « mer ». */}
      <div className="horizon" aria-hidden="true" />
      <ServicesSection id="services" />
      <AvisSection id="avis" />
      <CouchantSection id="contact" />
    </>
  );
}
