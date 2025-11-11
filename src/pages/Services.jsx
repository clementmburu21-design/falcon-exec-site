import React from 'react'

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-falcon-gold mb-6">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl text-falcon-gold mb-2">Executive Chauffeur Services</h3>
          <p className="text-gray-300 text-sm">Discreet, professional chauffeurs and premium vehicles for government delegations, business meetings, and corporate events.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl text-falcon-gold mb-2">Airport & Hotel Transfers</h3>
          <p className="text-gray-300 text-sm">Real-time flight tracking and comfortable transfers to and from JKIA, Wilson, and Mombasa airports.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl text-falcon-gold mb-2">Premium Car Rentals</h3>
          <p className="text-gray-300 text-sm">A modern fleet of luxury sedans, SUVs, and tour jeeps for self-drive or long-term leasing.</p>
        </div>
      </div>
    </div>
  )
}
