import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

export const vehicles = [
  { slug: 'lexus-lx570-black', name: 'Lexus LX 570', category: 'Luxury', label: 'Ultra-luxury SUV', image: '/fleet/lexus-lx570-black.webp', alt: 'Black Lexus LX 570', detail: 'A commanding luxury SUV for VIP travel and premium occasions.' },
  { slug: 'range-rover-vogue-white', name: 'Range Rover Vogue', category: 'Luxury', label: 'Luxury SUV', image: '/fleet/range-rover-vogue-white.webp', alt: 'White Range Rover Vogue', detail: 'A refined full-size luxury SUV for executive journeys.' },
  { slug: 'range-rover-black', name: 'Range Rover', category: 'Luxury', label: 'Luxury SUV', image: '/fleet/range-rover-black.webp', alt: 'Black Range Rover', detail: 'A distinctive luxury SUV for premium travel and special occasions.' },
  { slug: 'land-cruiser-200', name: 'Toyota Land Cruiser 200 Series V8', category: 'SUVs', label: 'Full-size 4×4', image: '/fleet/land-cruiser-200-v8-white.webp', alt: 'White Toyota Land Cruiser 200 Series V8', detail: 'A spacious full-size 4×4 for executive and upcountry journeys.' },
  { slug: 'prado-txl-white', name: 'Toyota Land Cruiser Prado TXL', category: 'SUVs', label: 'Premium 4×4', image: '/fleet/prado-txl-white.webp', alt: 'White Toyota Land Cruiser Prado TXL', detail: 'A refined 4×4 option for VIP transfers, family travel and special occasions.' },
  { slug: 'mercedes-s-class', name: 'Mercedes-Benz S-Class', category: 'Luxury', label: 'Luxury saloon', image: '/fleet/mercedes-s-class.jpg', alt: 'Mercedes-Benz S-Class', detail: 'A distinguished saloon for executive guests, formal occasions and premium transfers.' },
  { slug: 'mercedes-e-class', name: 'Mercedes-Benz E-Class', category: 'Executive', label: 'Executive saloon', image: '/fleet/mercedes-e-class-white.webp', alt: 'White Mercedes-Benz E-Class', detail: 'A refined executive saloon for business travel, airport transfers and formal occasions.' },
  { slug: 'mercedes-c200', name: 'Mercedes-Benz C200', category: 'Executive', label: 'Executive saloon', image: '/fleet/mercedes-c200-silver.webp', alt: 'Silver Mercedes-Benz C200', detail: 'Comfortable executive transport for meetings, airport transfers and city travel.' },
  { slug: 'mercedes-c180-coupe', name: 'Mercedes-Benz C180 Coupe', category: 'Executive', label: 'Two-door coupe', image: '/fleet/mercedes-c180-coupe-black.webp', alt: 'Black Mercedes-Benz C180 Coupe', detail: 'A sporty two-door Mercedes for stylish city travel and special occasions.' },
  { slug: 'mercedes-g350d', name: 'Mercedes-Benz G350d', category: 'Luxury', label: 'Luxury 4×4', image: '/fleet/mercedes-g350d-grey.webp', alt: 'Mercedes-Benz G350d', detail: 'An iconic luxury 4×4 for distinctive executive arrivals.' },
  { slug: 'toyota-vellfire', name: 'Toyota Vellfire', category: 'Group travel', label: 'Luxury MPV', image: '/fleet/toyota-vellfire-black.webp', alt: 'Black Toyota Vellfire', detail: 'A premium people carrier for family, VIP and group transfers.' },
  { slug: 'toyota-voxy-hybrid', name: 'Toyota Voxy Hybrid', category: 'Group travel', label: 'Hybrid people carrier', image: '/fleet/toyota-voxy-hybrid-black.webp', alt: 'Black Toyota Voxy Hybrid', detail: 'A practical hybrid people carrier for families and small groups.' },
  { slug: 'mazda-cx5', name: 'Mazda CX-5', category: 'SUVs', label: 'Crossover SUV', image: '/fleet/mazda-cx5-black.webp', alt: 'Black Mazda CX-5', detail: 'A versatile crossover suited to everyday mobility and weekend journeys.' },
  { slug: 'toyota-voxy', name: 'Toyota Voxy', category: 'Group travel', label: 'People carrier', image: '/fleet/toyota-voxy.jpg', alt: 'Toyota Voxy', detail: 'A practical people carrier for families, small groups and comfortable transfers.' },
  { slug: 'toyota-fielder', name: 'Toyota Fielder', category: 'Everyday', label: 'Estate', image: '/fleet/toyota-fielder.jpg', alt: 'Toyota Fielder', detail: 'A practical option for everyday city travel and business errands.' },
  { slug: 'bmw-x5', name: 'BMW X5', category: 'SUVs', label: 'Luxury crossover SUV', image: '/fleet/toyota-vitz.jpg', alt: 'BMW X5', detail: 'A premium performance SUV combining comfort, presence and versatile everyday capability.' },
]

const filters = ['All vehicles', 'Luxury', 'Executive', 'SUVs', 'Group travel', 'Everyday']
const whatsappBase = 'https://wa.me/254768000540?text='

function enquire(vehicle) {
  const message = `Hello Falcon Executive Logistics, I would like to enquire about the ${vehicle.name}. Please confirm availability, rates and hire terms.`
  window.open(whatsappBase + encodeURIComponent(message), '_blank', 'noopener,noreferrer')
}

export default function Fleet() {
  const [active, setActive] = useState('All vehicles')
  const shown = useMemo(() => active === 'All vehicles' ? vehicles : vehicles.filter(v => v.category === active), [active])

  return <div className="fleet-page">
    <section className="fleet-hero">
      <div className="fleet-hero-shade" />
      <div className="fleet-page-shell fleet-hero-content">
        <p className="fleet-eyebrow">THE FALCON COLLECTION · KENYA</p>
        <h1>Choose your<br /><em>way to arrive.</em></h1>
        <p>Explore vehicle options for executive journeys, family travel, airport transfers and everyday mobility.</p>
        <a className="fleet-gold-button" href="#vehicle-selection">EXPLORE THE FLEET <span>↓</span></a>
      </div>
    </section>

    <section className="fleet-catalogue fleet-page-shell" id="vehicle-selection">
      <div className="fleet-page-heading">
        <div><p className="fleet-eyebrow">VEHICLE SELECTION</p><h2>Find the right fit.</h2><p>Choose a category to browse the vehicles shown below. Contact us to confirm the exact vehicle, dates and rate.</p></div>
        <span className="fleet-count">{shown.length.toString().padStart(2, '0')} OPTIONS</span>
      </div>
      <div className="fleet-filters" role="group" aria-label="Filter vehicles by category">
        {filters.map(filter => <button key={filter} type="button" className={active === filter ? 'active' : ''} onClick={() => setActive(filter)} aria-pressed={active === filter}>{filter}</button>)}
      </div>
      <div className="fleet-catalogue-grid">
        {shown.map((vehicle, index) => <article className="fleet-listing" key={vehicle.slug}>
          <div className="fleet-listing-image"><img src={vehicle.image} alt={vehicle.alt} loading="lazy" /><span>{vehicle.label}</span></div>
          <div className="fleet-listing-info"><p className="fleet-listing-number">FALCON FLEET · {(index + 1).toString().padStart(2, '0')}</p><h3>{vehicle.name}</h3><p>{vehicle.detail}</p>
            <div className="fleet-listing-actions"><Link className="fleet-view-link" to={`/fleet/${vehicle.slug}`}>VIEW DETAILS <span>→</span></Link><button type="button" className="fleet-enquire" onClick={() => enquire(vehicle)}>WHATSAPP <span>↗</span></button><a className="fleet-email-link" href={`mailto:falconexecutivetours@gmail.com?subject=${encodeURIComponent("Fleet enquiry: " + vehicle.name)}&body=${encodeURIComponent("Hello Falcon Executive Logistics, I would like to enquire about the " + vehicle.name + ". Please share availability and rates.")}`}>EMAIL ↗</a></div>
          </div>
        </article>)}
      </div>
      <p className="fleet-photo-note">Vehicle photographs are representative of options arranged by Falcon Executive Logistics. Specific vehicle, supplier, specifications, availability and pricing are confirmed individually before booking.</p>
    </section>

    <section className="chauffeur-own-car">
      <div className="fleet-page-shell chauffeur-own-car-inner">
        <div><p className="fleet-eyebrow">YOUR CAR. OUR PROFESSIONAL DRIVER.</p><h2>Already have a vehicle?</h2><p>We can help arrange a professional driver for clients who need a chauffeur for their own car — whether for a day, an event, business appointments or other planned journeys.</p>
          <ul><li>Daily and short-term driver arrangements</li><li>Business, personal and event journeys</li><li>Booking details confirmed before service</li></ul>
          <a className="fleet-gold-button" href="https://wa.me/254768000540?text=Hello%20Falcon%20Executive%20Logistics%2C%20I%20need%20a%20professional%20driver%20for%20my%20own%20vehicle.%20Please%20share%20availability%20and%20rates.">BOOK A DRIVER <span>↗</span></a>
        </div>
        <div className="chauffeur-own-car-mark"><span>F</span><small>FALCON<br />CHAUFFEUR</small></div>
      </div>
    </section>

    <section className="fleet-bottom-cta"><p className="fleet-eyebrow">LET'S PLAN YOUR JOURNEY</p><h2>Not sure what you need?</h2><p>Tell us your itinerary, passenger needs and preferred travel dates. We'll help you explore suitable options.</p><div className="fleet-cta-actions"><Link className="fleet-gold-button" to="/quote">REQUEST A QUOTATION <span>↗</span></Link><a className="fleet-email-button" href="mailto:falconexecutivetours@gmail.com?subject=Fleet%20Enquiry">EMAIL AN ENQUIRY <span>↗</span></a></div></section>
  </div>
}
