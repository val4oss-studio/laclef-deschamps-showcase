import type { JSX } from 'react';

type ContactKind = 'phone' | 'email';

interface ContactCardProps {
  kind: ContactKind;
  label: string;
  value: string;
  href: string;
}

/* Tracés Feather, dessinés au trait pour rester lisibles en petit. */
const ICONS: Record<ContactKind, readonly string[]> = {
  phone: [
    'M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6' +
      'A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81' +
      'a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45' +
      'c.9.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2.03z',
  ],
  email: [
    'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
    'M22 6 12 13 2 6',
  ],
};

export function ContactCard({ kind, label, value, href }: ContactCardProps): JSX.Element {
  return (
    <a href={href} className="contact-card">
      <span className="contact-card-icon" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          focusable="false"
        >
          {ICONS[kind].map((d) => (
            <path key={d} d={d} />
          ))}
        </svg>
      </span>
      <span className="contact-card-label">{label}</span>
      <span className="contact-card-value">{value}</span>
    </a>
  );
}
