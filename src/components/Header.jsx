import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.jpg'

export default function Header() {
  const loc = useLocation()
  return (
    <header className="bg-[#071133] border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Falcon Logo" className="w-12 h-12 rounded-md" />
          <div>
            <h1 className="text-lg font-semibold text-white">Falcon Executive Logistics</h1>
            <p className="text-xs text-falcon-gold">Luxury Car Rentals • Chauffeur Services • Executive Transport Across Kenya.</p>
          </div>
        </div>
        <nav className="flex gap-6 items-center text-sm">
          <Link className={loc.pathname==='/'?'text-falcon-gold':'text-gray-300'} to="/">Home</Link>
          <Link className={loc.pathname==='/services'?'text-falcon-gold':'text-gray-300'} to="/services">Services</Link>
          <Link className={loc.pathname==='/about'?'text-falcon-gold':'text-gray-300'} to="/about">About</Link>
          <Link className={loc.pathname==='/contact'?'text-falcon-gold':'text-gray-300'} to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
