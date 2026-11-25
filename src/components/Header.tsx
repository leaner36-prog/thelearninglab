import { useEffect, useState } from 'react';
import { Menu, X, GraduationCap, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Chương trình học', href: '#programs' },
  { label: 'Phương pháp', href: '#why-us' },
  { label: 'Đánh giá', href: '#testimonials' },
  { label: 'Học phí', href: '#pricing' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-burgundy-100'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-burgundy-700 text-gold-500 transition-transform group-hover:scale-105">
              <GraduationCap className="h-6 w-6" strokeWidth={2.2} />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-burgundy-700">
              The Learning Lab
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-burgundy-600 transition-colors hover:text-gold-600"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#booking')}
              className="hidden items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-gold-500/30 transition-all hover:bg-gold-600 hover:shadow-md hover:shadow-gold-500/40 sm:inline-flex"
            >
              Đăng ký học thử
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-burgundy-700 md:hidden"
              aria-label="Mở menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-burgundy-100 bg-white px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="rounded-lg px-3 py-3 text-left text-base font-medium text-burgundy-600 transition-colors hover:bg-burgundy-50 hover:text-gold-600"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#booking')}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-base font-semibold text-white"
            >
              Đăng ký học thử
              <ArrowRight className="h-4 w-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
