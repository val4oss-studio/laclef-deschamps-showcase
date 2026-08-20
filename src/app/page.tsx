import type { JSX } from 'react';
import {
  HeroSection,
  AboutSection,
  ZoneSection,
  AvisSection,
  CouchantSection,
} from '@/app/component/section';
import { Horizon } from '@/app/component/layout';

export default function HomePage(): JSX.Element {
  return (
    <>
      <HeroSection id="hero" />
      <Horizon />
      <AboutSection id="a-propos" />
      <ZoneSection id="secteur" />
      <AvisSection id="avis" />
      <CouchantSection id="contact" />
    </>
  );
}
