import type { JSX } from 'react';
import Image from 'next/image';

import { RatingStars } from './RatingStars';

interface AvisCardProps {
  pseudo: string;
  avatar: string;
  avatarAlt: string;
  rating: number;
  comment: string;
}

/** Côté rendu du carré de l'avatar, en pixels — voir `.avis-card-avatar`. */
const AVATAR_SIZE = 64;

export function AvisCard({
  pseudo,
  avatar,
  avatarAlt,
  rating,
  comment,
}: AvisCardProps): JSX.Element {
  return (
    <article className="avis-card">
      <RatingStars rating={rating} />
      <div className="avis-card-body">
        <div className="avis-card-author">
          <Image
            src={avatar}
            alt={avatarAlt}
            width={AVATAR_SIZE}
            height={AVATAR_SIZE}
            className="avis-card-avatar"
          />
          <p className="avis-card-pseudo">{pseudo}</p>
        </div>
        <blockquote className="avis-card-quote">{comment}</blockquote>
      </div>
    </article>
  );
}
