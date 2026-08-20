import type { CSSProperties, JSX } from 'react';
import Image from 'next/image';

import type { Listing } from '@/config/logement';

import { Tag } from './Tag';

interface LogementCardProps {
  name: string;
  city: string;
  type: string;
  capacity: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Absent tant que l'annonce n'est pas publiée : la carte n'est alors pas cliquable. */
  listing?: Listing;
  /** Rang de la carte dans sa grille, pour échelonner l'apparition. */
  index?: number;
}

export function LogementCard({
  name,
  city,
  type,
  capacity,
  description,
  image,
  imageAlt,
  listing,
  index,
}: LogementCardProps): JSX.Element {
  const style =
    index === undefined ? undefined : ({ '--stagger-index': index } as CSSProperties);

  return (
    <article className={listing ? 'card card--link' : 'card'} style={style}>
      <div className="card-media">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 64rem) 20rem, (min-width: 40rem) 45vw, 90vw"
          className="card-image"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">
          {listing ? (
            <a
              href={listing.url}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} — voir l'annonce sur ${listing.platform} (nouvel onglet)`}
            >
              {name}
            </a>
          ) : (
            name
          )}
        </h3>

        <ul className="card-meta">
          <li>
            <Tag label={city} variant="accent" />
          </li>
          <li>
            <Tag label={type} />
          </li>
          <li>
            <Tag label={capacity} />
          </li>
        </ul>

        <p className="card-text">{description}</p>

        {listing ? (
          /* Le lien accessible est celui du titre : ce rappel n'est que du décor. */
          <p className="card-action" aria-hidden="true">
            Voir l’annonce sur {listing.platform} ↗
          </p>
        ) : (
          <p className="card-action card-action--pending">Bientôt en ligne</p>
        )}
      </div>
    </article>
  );
}
