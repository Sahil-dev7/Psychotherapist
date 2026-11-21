import React, { useState, useEffect } from 'react';
import { Logo } from '../common/Logo';
import { Calendar, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About us', href: '#about' },
    { label: 'Services', href: '#support' },
    { label: 'Specialization', href: '#areas' },
    { label: 'Internship', href: '#appointment' },
    { label: 'Gallery', href: '#gallery' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/10 bg-[#171c19]/95 py-1.5 shadow-lg backdrop-blur-xl lg:py-2.5'
          : 'border-b border-white/10 bg-[#202720]/65 py-2 backdrop-blur-xl sm:py-3.5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 sm:gap-5 sm:px-6 lg:px-10">
        {/* Left: Sheela Dang logo */}
        <a href="#home" className="flex shrink-0 items-center group">
          <Logo size="sm" variant="white" className="[&_img]:h-8 sm:[&_img]:h-10" />
        </a>

        {/* Center / Navigation Links matching reference */}
        <nav className="hidden items-center gap-5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-[11px] font-medium text-stone-200 backdrop-blur-sm lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`py-1 transition-colors hover:text-[#f07b65] ${link.label === 'Home' ? 'text-[#f07b65]' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Book Appointment Button */}
        <div className="hidden items-center lg:flex">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 rounded-full border border-[#f28b70]/65 bg-[#df553f] px-5 py-3 text-[11px] font-semibold tracking-wide text-white shadow-lg shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ca4935] hover:shadow-xl active:translate-y-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book An Appointment</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenBooking}
            className="inline-flex shrink-0 items-center rounded-full border border-[#f28b70]/65 bg-[#df553f] px-3 py-1.5 text-[11px] font-semibold text-white shadow-md transition hover:bg-[#ca4935] sm:px-5 sm:py-2.5 sm:text-xs"
          >
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book An Appointment</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="shrink-0 rounded-full border border-white/15 bg-white/10 p-2 text-stone-100 transition hover:bg-white/15 hover:text-white sm:p-2.5"
            aria-label="Toggle Navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-white/10 bg-[#18201b]/95 px-5 py-5 shadow-2xl backdrop-blur-xl lg:hidden sm:left-6 sm:right-6">
          <nav className="flex flex-col gap-1 text-sm font-medium text-stone-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 transition hover:bg-white/5 hover:text-[#f2a28f]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
