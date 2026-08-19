import type { JSX } from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export function Card({ title, description, image, imageAlt }: CardProps): JSX.Element {
  return (
    <article className="card">
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
