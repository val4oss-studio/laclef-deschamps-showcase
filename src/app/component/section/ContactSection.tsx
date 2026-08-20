import type { JSX } from 'react';

import { ContactCard } from '@/app/component/ui';
import { RevealSection } from '@/app/component/layout';
import { site } from '@/config/site';

interface ContactSectionProps {
  id: string;
}

export function ContactSection({ id }: ContactSectionProps): JSX.Element {
  return (
    <RevealSection id={id} className="section section--first">
      <div className="section-inner">
        <div className="section-content">
          <p className="eyebrow section-eyebrow">{site.contact.city}</p>
          <h1 className="section-title section-title--display">Nous contacter</h1>
          <p className="section-lead">
            Une question sur votre logement, une demande de devis ? Appelez-nous
            ou écrivez-nous : c’est toujours l’un de nous quatre qui répond.
          </p>
        </div>

        <div className="contact-grid ao-animate">
          <ContactCard
            kind="phone"
            label="Par téléphone"
            value={site.contact.phone}
            href={site.contact.phoneHref}
          />
          <ContactCard
            kind="email"
            label="Par e-mail"
            value={site.contact.email}
            href={`mailto:${site.contact.email}`}
          />
        </div>
      </div>
    </RevealSection>
  );
}
