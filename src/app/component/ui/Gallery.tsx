import type { JSX } from 'react';
import Image from 'next/image';

import type { Photo } from '@/config/galerie';

interface GalleryProps {
  photos: readonly Photo[];
  /** Nom accessible de la galerie. */
  label: string;
}

export function Gallery({ photos, label }: GalleryProps): JSX.Element {
  return (
    <ul className="gallery" aria-label={label}>
      {photos.map((photo) => (
        <li key={photo.id} className="gallery-item">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 64rem) 24rem, (min-width: 40rem) 45vw, 90vw"
            className="card-image"
          />
        </li>
      ))}
    </ul>
  );
}
