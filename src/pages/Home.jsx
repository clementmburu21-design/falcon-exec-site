import React from 'react'

const whatsapp = 'https://wa.me/254768000540?text=Hello%20Falcon%20Executive%20Logistics%2C%20I%27d%20like%20to%20make%20a%20booking%20enquiry.'

const fleet = [
  { category: 'PREMIUM SUV', name: 'Toyota Land Cruiser Prado', detail: 'A spacious 7-seat SUV option for executive travel, family journeys and upcountry trips.', image: '/fleet/prado-black.jpg', alt: 'Black Toyota Land Cruiser Prado' },
  { category: 'PREMIUM SUV', name: 'Toyota Land Cruiser Prado', detail: 'A refined SUV option for comfortable city travel and longer journeys.', image: '/fleet/prado-white.jpg', alt: 'White Toyota Land Cruiser Prado' },
  { category: 'EXECUTIVE', name: 'Mercedes-Benz S-Class', detail: 'An elegant choice for VIP guests, executive movements and special occasions.', image: '/fleet/mercedes-s-class.jpg', alt: 'Black Mercedes-Benz executive saloon' },
  { category: 'PREMIUM SALOON', name: 'Mercedes-Benz C-Class', detail: 'A stylish and comfortable option for business and personal travel.', image: '/fleet/mercedes-c-class.jpg', alt: 'Silver Mercedes-Benz C-Class' },
  { category: 'CROSSOVER SUV', name: 'Mazda CX-5', detail: 'A versatile option for everyday comfort, business travel and weekend escapes.', image: '/fleet/mazda-cx5.jpg', alt: 'Silver Mazda CX-5' },
  { category: 'GROUP COMFORT', name: 'Toyota Voxy', detail: 'Practical space and comfort for families, small groups and airport transfers.', image: '/fleet/toyota-voxy.jpg', alt: 'White Toyota Voxy people carrier' },
  { category: 'PRACTICAL TRAVEL', name: 'Toyota Fielder', detail: 'A convenient choice for day-to-day mobility and longer practical journeys.', image: '/fleet/toyota-fielder.jpg', alt: 'White Toyota Fielder' },
  { category: 'CITY COMPACT', name: 'Toyota Vitz', detail: 'A compact option for convenient city movement and everyday errands.', image: '/fleet/toyota-vitz.jpg', alt: 'Silver Toyota Vitz' },
]
const services = [
  ['01', 'Executive Chauffeur', 'Professional chauffeur arrangements for business meetings, executives and distinguished guests.'],
  ['02', 'Airport Transfers', 'Comfortable pickups and drop-offs for JKIA, Wilson Airport, hotels and private residences.'],
  ['03', 'Premium Car Hire', 'Self-drive and chauffeur-driven vehicle options for personal and business travel.'],
  ['04', 'Corporate & Delegation Travel', 'Coordinated transport for companies, visiting teams, conferences and official movements.'],
  ['05', 'Weddings & Special Events', 'Elegant vehicles and transport coordination for weddings, celebrations and important occasions.'],
  ['06', 'Safari & Upcountry Travel', 'Vehicle arrangements for journeys beyond Nairobi, leisure travel and selected safari routes.'],
]

function Heading({ eyebrow, title, text }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="section-intro">{text}</p>}</div>
}

export default function Home() {
  return <div className="home-page">
    <section className="hero-section">
      <div className="hero-image" aria-hidden="true" /><div className="hero-shade" aria-hidden="true" />
      <div className="hero-content page-shell">
        <p className="hero-kicker"><span /> PREMIUM MOBILITY · KENYA</p>
        <h1>Arrive with<br /><em>distinction.</em></h1>
        <p className="hero-copy">Executive transport, premium car hire and professional chauffeur services — thoughtfully arranged around your journey.</p>
        <div className="hero-actions">
          <a className="button button-gold" href={whatsapp} target="_blank" rel="noopener noreferrer">ENQUIRE ON WHATSAPP <span>↗</span></a>
          <a className="button button-outline" href="#services">EXPLORE OUR SERVICES</a>
        </div>
        <div className="hero-note"><span className="hero-note-line" /> PRIVATE JOURNEYS. PROFESSIONAL SERVICE.</div>
      </div>
      <div className="hero-index"><span>01</span> / 03</div>
    </section>

    <section className="intro-strip"><div className="page-shell intro-grid">
      <p className="intro-label">THE FALCON STANDARD</p>
      <p className="intro-statement">Every journey deserves <span>care, comfort and precision.</span></p>
      <p className="intro-description">From a single airport pickup to coordinated executive movements, we make getting there feel effortless.</p>
    </div></section>

    <section className="section-block page-shell" id="services">
      <Heading eyebrow="WHAT WE DO" title="Mobility, made exceptional." text="Flexible transport solutions for business, leisure and life's important moments." />
      <div className="services-grid">{services.map(([number, title, text]) =>
        <article className="service-card" key={number}>
          <span className="service-number">{number}</span><div className="service-mark" aria-hidden="true">✳</div>
          <h3>{title}</h3><p>{text}</p>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer">MAKE AN ENQUIRY <span>↗</span></a>
        </article>
      )}</div>
    </section>

    <section className="fleet-section"><div className="page-shell">
      <div className="fleet-heading-row"><Heading eyebrow="THE FLEET" title="A vehicle for every occasion." text="Browse a selection of vehicles we can arrange for executive, family and everyday travel. Ask us about the right option for your journey." />
        <a className="text-link" href={whatsapp} target="_blank" rel="noopener noreferrer">REQUEST A VEHICLE <span>↗</span></a>
      </div>
      <div className="fleet-grid">{fleet.map(vehicle =>
        <article className="fleet-card" key={vehicle.name + vehicle.image}>
          <div className="fleet-image-wrap"><img src={vehicle.image} alt={vehicle.alt} loading="lazy" /><span className="fleet-category">{vehicle.category}</span></div>
          <div className="fleet-card-body"><h3>{vehicle.name}</h3><p>{vehicle.detail}</p>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">CHECK AVAILABILITY <span>↗</span></a>
          </div>
        </article>
      )}</div>
      <p className="fleet-disclaimer">Photographs show example vehicles arranged through Falcon Executive Logistics. Exact vehicle, supplier, rate and availability are confirmed individually before booking.</p>
    </div></section>

    <section className="experience-section">
      <div className="experience-photo" role="img" aria-label="Premium vehicle interior prepared for an executive journey" />
      <div className="experience-copy"><p className="eyebrow">MORE THAN A RIDE</p><h2>Professionalism in every detail.</h2>
        <p>We understand that punctuality, presentation and clear communication matter. Falcon Executive Logistics helps individuals and organisations arrange transport with confidence.</p>
        <ul><li><span>✦</span> Service shaped around your itinerary</li><li><span>✦</span> Options for individuals, groups and organisations</li><li><span>✦</span> Clear booking communication from enquiry to confirmation</li></ul>
        <a className="button button-gold" href="/about">DISCOVER FALCON <span>↗</span></a>
      </div>
    </section>

    <section className="closing-cta"><div className="page-shell closing-inner">
      <p className="eyebrow">YOUR JOURNEY STARTS HERE</p><h2>Make your next move<br /><em>the right one.</em></h2>
      <p>Tell us where you need to go, when you need to travel and the vehicle or service you have in mind.</p>
      <a className="button button-gold" href={whatsapp} target="_blank" rel="noopener noreferrer">PLAN YOUR JOURNEY ON WHATSAPP <span>↗</span></a>
      <div className="closing-contact"><span>CALL US</span><a href="tel:+254768000540">+254 768 000 540</a><span>EMAIL</span><a href="mailto:falconexecutivetours@gmail.com">falconexecutivetours@gmail.com</a></div>
    </div></section>
  </div>
}
