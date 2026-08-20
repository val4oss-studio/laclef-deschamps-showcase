import type { JSX } from 'react';

import { Gallery } from '@/app/component/ui';
import { RevealSection } from '@/app/component/layout';
import { galerie } from '@/config/galerie';

interface GallerySectionProps {
  id: string;
}

export function GallerySection({ id }: GallerySectionProps): JSX.Element {
  return (
    <RevealSection id={id} className="section section--sable">
      <div className="section-inner">
        <div className="section-content">
          <p className="eyebrow section-eyebrow">En images</p>
          <h2 className="section-title">L’agence</h2>
        </div>

        <div className="gallery-frame ao-animate">
          <Gallery photos={galerie} label="Photographies de l’agence" />
        </div>
      </div>
    </RevealSection>
  );
}
