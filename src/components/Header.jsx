
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export default function Header() {
  const loc = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-[#080B12] border-b border-[#B99750]/40 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Falcon Executive Logistics"
            className="w-14 h-14 object-contain rounded-md"
          />
          <div>
            <h1 className="text-lg font-bold text-white tracking-wide">
              Falcon Executive Logistics
            </h1>
            <p className="text-xs text-[#C6A45C] tracking-wider">
              PREMIUM MOBILITY
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                loc.pathname === link.path
                  ? 'text-[#D4AF65]'
                  : 'text-gray-300 hover:text-[#D4AF65]'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <a
            href="https://wa.me/254768000540"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C6A45C] text-black px-5 py-2.5 rounded-sm font-semibold text-sm hover:bg-[#D9B96F] transition"
          >
            Book Now
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#D4AF65] text-2xl"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-[#080B12] border-t border-gray-800 px-6 py-5 flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-gray-200 hover:text-[#D4AF65]"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="https://wa.me/254768000540"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C6A45C] text-black text-center py-3 font-semibold"
          >
            Book Now on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
