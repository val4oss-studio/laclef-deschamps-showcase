import type { CSSProperties, JSX } from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  /**
   * Rang de la carte dans sa grille, pour échelonner l'apparition.
   * Omis, la carte apparaît sans décalage.
   */
  index?: number;
}

export function Card({
  title,
  description,
  image,
  imageAlt,
  index,
}: CardProps): JSX.Element {
  const style =
    index === undefined ? undefined : ({ '--stagger-index': index } as CSSProperties);

  return (
    <article className="card" style={style}>
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
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
    </article>
  );
}
