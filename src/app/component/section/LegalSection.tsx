import type { JSX, ReactNode } from 'react';

import { RevealSection } from '@/app/component/layout';
import type { LegalDocument } from '@/config/legal';

interface LegalSectionProps {
  id: string;
  document: LegalDocument;
}

/** Repère les balises « [À COMPLÉTER : … ] » pour les rendre impossibles à manquer. */
const TODO_PATTERN = /(\[[^\]]*\])/g;

export function LegalSection({ id, document }: LegalSectionProps): JSX.Element {
  return (
    <RevealSection id={id} className="section section--first">
      <div className="section-inner">
        <div className="section-content">
          <p className="eyebrow section-eyebrow">Informations légales</p>
          <h1 className="section-title">{document.title}</h1>
          <p className="legal-updated">Dernière mise à jour : {document.updatedAt}</p>
          {document.intro ? (
            <p className="section-lead legal-intro">{highlight(document.intro)}</p>
          ) : null}
        </div>

        <div className="legal ao-animate">
          {document.blocks.map((block) => (
            <section key={block.title} className="legal-block">
              <h2 className="legal-title">{block.title}</h2>

              {block.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="legal-text">
                  {highlight(paragraph)}
                </p>
              ))}

              {block.list ? (
                <ul className="legal-list">
                  {block.list.map((item) => (
                    <li key={item}>{highlight(item)}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

/**
 * Surligne les passages entre crochets. Une mention « [À COMPLÉTER] » publiée
 * en l'état sur une page légale est un incident : elle doit sauter aux yeux.
 */
function highlight(text: string): ReactNode {
  return text.split(TODO_PATTERN).map((part, index) =>
    part.startsWith('[') ? (
      <mark key={index} className="legal-todo">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}
