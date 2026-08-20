import type { JSX } from 'react';
import {
  HeroSection,
  AboutSection,
  ZoneSection,
  AvisSection,
  CouchantSection,
} from '@/app/component/section';

export default function HomePage(): JSX.Element {
  return (
    <>
      <HeroSection id="hero" />
      {/* Filet or + demi-soleil : passage de la section claire à la section « mer ». */}
      <div className="horizon" aria-hidden="true" />
      <AboutSection id="a-propos" />
      <ZoneSection id="secteur" />
      <AvisSection id="avis" />
      <CouchantSection id="contact" />
    </>
  );
}
