import type { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/config/navigation';
import { site } from '@/config/site';

export function Navbar(): JSX.Element {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-brand" aria-label={`${site.name} — accueil`}>
          <Image
            src="/brand/logo-256.png"
            alt=""
            width={256}
            height={256}
            className="navbar-logo"
            priority
          />
          {/*<span className="navbar-brand-name">{site.name}</span>*/}
        </Link>

        <nav className="navbar-nav" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="navbar-link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
