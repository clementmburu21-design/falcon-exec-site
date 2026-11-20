import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

export const vehicles = [
  { slug: 'prado-black', name: 'Toyota Land Cruiser Prado', category: 'SUVs', label: 'Premium 4×4', image: '/fleet/prado-black.jpg', alt: 'Black Toyota Land Cruiser Prado', detail: 'A confident, spacious SUV for executive travel, family journeys and upcountry trips.' },
  { slug: 'prado-white', name: 'Toyota Land Cruiser Prado', category: 'SUVs', label: 'Premium 4×4', image: '/fleet/prado-white.jpg', alt: 'White Toyota Land Cruiser Prado', detail: 'A refined 4×4 option for VIP transfers, special occasions and longer journeys.' },
  { slug: 'mercedes-s-class', name: 'Mercedes-Benz S-Class', category: 'Luxury', label: 'Luxury saloon', image: '/fleet/mercedes-s-class.jpg', alt: 'Mercedes-Benz S-Class', detail: 'A distinguished saloon for executive guests, formal occasions and premium transfers.' },
  { slug: 'range-rover', name: 'Range Rover', category: 'Luxury', label: 'Luxury SUV · On request', image: '/fleet/prado-black.jpg', alt: 'Representative premium black luxury SUV', detail: 'A commanding luxury SUV option for executive travel and special occasions. Exact model and specification confirmed on enquiry.' },
  { slug: 'land-cruiser-200', name: 'Toyota Land Cruiser 200 Series', category: 'SUVs', label: 'Full-size 4×4 · On request', image: '/fleet/prado-white.jpg', alt: 'Representative Toyota Land Cruiser 4x4', detail: 'A full-size 4×4 option for spacious executive travel and longer journeys. Exact vehicle specification confirmed on enquiry.' },
  { slug: 'mercedes-e-class', name: 'Mercedes-Benz E-Class', category: 'Executive', label: 'Executive saloon · On request', image: '/fleet/mercedes-c-class.jpg', alt: 'Representative Mercedes-Benz executive saloon', detail: 'A refined executive saloon for business travel, airport transfers and formal occasions. Exact model year and specification confirmed on enquiry.' },
  { slug: 'mercedes-c-class', name: 'Mercedes-Benz C-Class', category: 'Executive', label: 'Executive saloon', image: '/fleet/mercedes-c-class.jpg', alt: 'Mercedes-Benz C-Class', detail: 'An elegant choice for business meetings, airport transfers and city travel.' },
  { slug: 'mazda-cx5', name: 'Mazda CX-5', category: 'SUVs', label: 'Crossover SUV', image: '/fleet/mazda-cx5.jpg', alt: 'Mazda CX-5', detail: 'A versatile crossover suited to everyday mobility and weekend journeys.' },
  { slug: 'toyota-voxy', name: 'Toyota Voxy', category: 'Group travel', label: 'People carrier', image: '/fleet/toyota-voxy.jpg', alt: 'Toyota Voxy', detail: 'A practical people carrier for families, small groups and comfortable transfers.' },
  { slug: 'toyota-fielder', name: 'Toyota Fielder', category: 'Everyday', label: 'Estate', image: '/fleet/toyota-fielder.jpg', alt: 'Toyota Fielder', detail: 'A practical option for everyday city travel and business errands.' },
  { slug: 'toyota-vitz', name: 'Toyota Vitz', category: 'Everyday', label: 'Compact', image: '/fleet/toyota-vitz.jpg', alt: 'Toyota Vitz', detail: 'A compact choice for convenient, economical city mobility.' },
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
        {shown.map((vehicle, index) => <article className="fleet-listing" key={vehicle.image}>
          <div className="fleet-listing-image"><img src={vehicle.image} alt={vehicle.alt} loading="lazy" /><span>{vehicle.label}</span></div>
          <div className="fleet-listing-info"><p className="fleet-listing-number">FALCON FLEET · {(index + 1).toString().padStart(2, '0')}</p><h3>{vehicle.name}</h3><p>{vehicle.detail}</p>
            <div className="fleet-listing-actions"><Link className="fleet-view-link" to={`/fleet/${vehicle.slug}`}>VIEW DETAILS <span>→</span></Link><button type="button" className="fleet-enquire" onClick={() => enquire(vehicle)}>WHATSAPP ENQUIRY <span>↗</span></button></div>
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

    <section className="fleet-bottom-cta"><p className="fleet-eyebrow">LET'S PLAN YOUR JOURNEY</p><h2>Not sure what you need?</h2><p>Tell us your itinerary, passenger needs and preferred travel dates. We'll help you explore suitable options.</p><a className="fleet-gold-button" href="https://wa.me/254768000540?text=Hello%20Falcon%20Executive%20Logistics%2C%20please%20help%20me%20choose%20a%20vehicle%20for%20my%20journey.">SPEAK TO OUR TEAM <span>↗</span></a></section>
  </div>
}
