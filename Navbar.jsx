import React, { useState } from 'react'

export default function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    { href: '#about', label: 'About' },
    { href: '#properties', label: 'Properties' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-bold text-white">Z</div>
          <div>
            <div className="whitespace-nowrap font-heading text-sm font-semibold sm:text-base">Zumera Properties</div>
            <div className="text-xs text-gray-500">LTD</div>
          </div>
        </div>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
          {links.map(link => (
            <a key={link.href} href={link.href} className="rounded px-2 py-2 hover:text-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300">{link.label}</a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a href="#contact" className="btn-primary inline-flex min-h-10 items-center rounded bg-brand-500 px-3 text-sm text-white shadow hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 sm:px-4">Enquire</a>
          <button
            type="button"
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded p-2 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 md:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(open => !open)}
          >
            <span aria-hidden="true" className="text-xl leading-none">{menuOpen ? '×' : '☰'}</span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-gray-100 px-4 py-2 md:hidden">
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block rounded px-3 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300">{link.label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}
