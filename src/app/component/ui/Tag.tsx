import type { JSX } from 'react';

type TagVariant = 'default' | 'accent';

interface TagProps {
  label: string;
  variant?: TagVariant;
}

/** Étiquette courte : commune, typologie, capacité, état. */
export function Tag({ label, variant = 'default' }: TagProps): JSX.Element {
  const className = variant === 'accent' ? 'tag tag--accent' : 'tag';

  return <span className={className}>{label}</span>;
}
