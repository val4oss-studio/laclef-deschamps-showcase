import type { JSX } from 'react';

interface AboutSectionProps {
  id: string;
}

export function AboutSection({ id }: AboutSectionProps): JSX.Element {
  return (
    <section id={id} className="section">
      <div className="section-inner" />
    </section>
  );
}
