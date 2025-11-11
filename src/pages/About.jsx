import React from 'react'

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-falcon-gold mb-4">About Us</h2>
      <p className="text-gray-300 mb-6">
        Falcon Executive Logistics delivers high-end chauffeur, car rental, and transport services across Kenya, combining discretion, punctuality, and prestige.
      </p>
      <ul className="space-y-3 text-gray-300">
        <li>• World-Class Fleet — from luxury sedans and SUVs to tour jeeps.</li>
        <li>• Local Expertise — deep knowledge of Kenyan routes and logistics.</li>
        <li>• 24/7 Client Support — always available to accommodate your schedule.</li>
        <li>• Safety First — vetted drivers and well-maintained vehicles ensure every trip is secure.</li>
      </ul>
    </div>
  )
}
