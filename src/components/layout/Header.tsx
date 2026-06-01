'use client'
import { useState } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { ChapaLogo } from '@/components/brand/ChapaLogo'

const navLinks = [
  { href: '/como-funciona', label: 'como funciona' },
  { href: '/praias', label: 'praias' },
  { href: '/vendedores', label: 'para vendedores' },
  { href: '/faq', label: 'ajuda' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-espuma/90 backdrop-blur-md border-b border-linha">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" aria-label="CHAPA Delivery - página inicial">
          <ChapaLogo size="md" />
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-tinta/70 hover:text-mare transition-colors duration-200 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.vendorSignupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-mare hover:text-mare-deep transition-colors"
          >
            sou vendedor
          </a>
          <a
            href="https://app.chapa.delivery/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brasa hover:bg-brasa-deep text-espuma text-sm font-semibold px-4 py-2 rounded-pill transition-colors duration-200"
          >
            Pedir agora
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-md text-tinta"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-espuma border-t border-linha px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-tinta/80 hover:text-mare"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.vendorSignupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-mare"
            onClick={() => setOpen(false)}
          >
            sou vendedor
          </a>
          <a
            href="https://app.chapa.delivery/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brasa text-espuma text-sm font-semibold px-4 py-3 rounded-pill text-center"
            onClick={() => setOpen(false)}
          >
            Pedir agora
          </a>
        </div>
      )}
    </header>
  )
}
