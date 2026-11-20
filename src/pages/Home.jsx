import React from 'react'
import { Link } from 'react-router-dom'

const whatsapp = 'https://wa.me/254768000540?text=Hello%20Falcon%20Executive%20Logistics%2C%20I%27d%20like%20to%20make%20a%20booking%20enquiry.'

const fleet = [
  { category: 'PREMIUM SUV', name: 'Toyota Land Cruiser Prado', detail: 'A spacious 7-seater SUV with a commanding presence for executive and upcountry journeys.', image: '/fleet/safari-upcountry.webp', alt: 'Black Toyota Land Cruiser Prado' },
  { category: 'PREMIUM SUV', name: 'Toyota Land Cruiser Prado', detail: 'A refined 4x4 option for VIP transfers, family travel and special occasions.', image: '/fleet/airport-transfers.webp', alt: 'White Toyota Land Cruiser Prado' },
  { category: 'LUXURY SUV', name: 'Range Rover', detail: 'A commanding luxury SUV option for executive journeys and special occasions, subject to confirmation.', image: '/fleet/safari-upcountry.webp', alt: 'Representative luxury black SUV' },
  { category: 'FULL-SIZE 4×4', name: 'Toyota Land Cruiser 200 Series', detail: 'A spacious full-size 4×4 option for executive and upcountry travel, subject to confirmation.', image: '/fleet/airport-transfers.webp', alt: 'Representative Toyota Land Cruiser 4x4' },
  { category: 'EXECUTIVE SALOON', name: 'Mercedes-Benz E-Class', detail: 'A refined executive saloon for business travel and airport transfers, subject to confirmation.', image: '/fleet/mercedes-c-class.jpg', alt: 'Representative Mercedes-Benz executive saloon' },
  { category: 'LUXURY SALOON', name: 'Mercedes-Benz S-Class', detail: 'A sophisticated choice for executive guests, VIP transfers and formal occasions.', image: '/fleet/chauffeur.webp', alt: 'Mercedes-Benz S-Class' },
  { category: 'LUXURY SUV', name: 'Range Rover', detail: 'A prestigious luxury SUV for VIP transfers, executive travel and special occasions.', image: '/fleet/prado-black.jpg', alt: 'Representative luxury black SUV' },
  { category: 'LUXURY 4×4', name: 'Toyota Land Cruiser 200 Series', detail: 'A full-size 4×4 option for executive journeys, longer routes and group travel.', image: '/fleet/prado-white.jpg', alt: 'Representative Toyota Land Cruiser 4x4' },
  { category: 'EXECUTIVE SALOON', name: 'Mercedes-Benz E-Class', detail: 'A refined saloon for business meetings, airport transfers and city travel.', image: '/fleet/mercedes-c-class.jpg', alt: 'Representative Mercedes-Benz executive saloon' },
  { category: 'EXECUTIVE SALOON', name: 'Mercedes-Benz C-Class', detail: 'Comfortable executive transport for meetings, airport transfers and city travel.', image: '/fleet/mercedes-c-class.jpg', alt: 'Mercedes-Benz C-Class' },
  { category: 'CROSSOVER SUV', name: 'Mazda CX-5', detail: 'A versatile and comfortable SUV for everyday travel and weekend journeys.', image: '/fleet/premium-car-hire.webp', alt: 'Mazda CX-5' },
  { category: 'PEOPLE CARRIER', name: 'Toyota Voxy', detail: 'A practical option for families, small groups and comfortable transfers.', image: '/fleet/corporate-delegation.webp', alt: 'Toyota Voxy' },
  { category: 'ESTATE', name: 'Toyota Fielder', detail: 'A dependable, economical choice for practical city and business travel.', image: '/fleet/toyota-fielder.jpg', alt: 'Toyota Fielder' },
  { category: 'COMPACT', name: 'Toyota Vitz', detail: 'A compact option for convenient and budget-conscious city mobility.', image: '/fleet/toyota-vitz.jpg', alt: 'Toyota Vitz' },
]
const services = [
  ['01', '♙', 'Executive Chauffeur Services', 'Professional, discreet chauffeur-driven transport for executives, VIP guests, business meetings and personal journeys.', '/fleet/chauffeur.webp', 'Chauffeur beside a Mercedes-Benz executive sedan'],
  ['02', '✈', 'Airport & Hotel Transfers', 'Pre-arranged pickups and drop-offs for JKIA, Wilson Airport, hotels, residences and private aviation terminals.', '/fleet/airport-transfers.webp', 'Range Rover prepared for an airport transfer beside a private jet'],
  ['03', '▱', 'Premium Car Hire', 'Vehicle options across economy, SUV and luxury categories, with self-drive or chauffeur-driven arrangements subject to availability.', '/fleet/premium-car-hire.webp', 'Premium vehicle hire options'],
  ['04', '♟', 'Corporate & Delegation Travel', 'Coordinated transport for company teams, visiting delegations, conferences, meetings and organisational assignments.', '/fleet/corporate-delegation.webp', 'Business delegates boarding a Mercedes-Benz V-Class'],
  ['05', '♧', 'Weddings & Special Events', 'Elegant vehicle arrangements and transport coordination for weddings, celebrations and memorable occasions.', '/fleet/weddings-events.webp', 'Luxury vehicle for wedding transport'],
  ['06', '◎', 'Safari & Upcountry Travel', 'Suitable vehicle arrangements for upcountry journeys, leisure travel and selected safari routes across Kenya.', '/fleet/safari-upcountry.webp', '4x4 vehicle for safari and upcountry travel'],
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
          <a className="button button-gold" href={whatsapp} target="_blank" rel="noopener noreferrer">ENQUIRE ON WHATSAPP <span>↗</span></a><a className="button button-outline" href="mailto:falconexecutivetours@gmail.com?subject=Falcon%20Transport%20Enquiry">EMAIL US <span>↗</span></a><a className="button button-outline" href="mailto:falconexecutivetours@gmail.com?subject=Falcon%20Transport%20Enquiry">ENQUIRE BY EMAIL <span>↗</span></a>
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
      <Heading eyebrow="OUR SERVICES" title={<>Mobility Made <em>Exceptional</em></>} text="Comprehensive, tailored transport solutions for business, leisure and special occasions." />
      <div className="services-grid">{services.map(([number, icon, title, text, image, alt]) =>
        <article className="service-card" key={number}>
          <div className="service-card-image"><img src={image} alt={alt} loading="lazy" /></div>
          <div className="service-card-content">
            <span className="service-icon" aria-hidden="true">{icon}</span><h3>{title}</h3><p>{text}</p>
            <div className="service-card-actions">
              <a className="service-arrow" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`Enquire about ${title} on WhatsApp`}>↗</a>
              <a className="service-email" href={`mailto:falconexecutivetours@gmail.com?subject=${encodeURIComponent('Enquiry: ' + title)}&body=${encodeURIComponent('Hello Falcon Executive Logistics, I would like to enquire about ' + title + '. Please contact me with further details.')}`}>EMAIL ENQUIRY</a>
            </div>
          </div>     </article>
      )}</div>
    </section>

    <section className="fleet-section"><div className="page-shell">
      <div className="fleet-heading-row"><Heading eyebrow="THE FLEET" title="A vehicle for every occasion." text="Browse a selection of vehicles we can arrange for executive, family and everyday travel. Ask us about the right option for your journey." />
        <Link className="text-link" to="/quote">REQUEST A QUOTATION <span>↗</span></Link>
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


    <section className="corporate-section">
      <div className="page-shell corporate-inner">
        <div className="corporate-copy">
          <p className="eyebrow">TRANSPORT FOR ORGANISATIONS</p>
          <h2>Professional mobility for<br /><em>business in motion.</em></h2>
          <p>From day-to-day executive travel to visiting teams and scheduled events, Falcon Executive Logistics helps organisations arrange transport around their operational needs.</p>
          <ul>
            <li><span>✦</span> Executive and staff transportation</li>
            <li><span>✦</span> Airport pickups for guests and visiting teams</li>
            <li><span>✦</span> Conference, meeting and event transport enquiries</li>
            <li><span>✦</span> Vehicle and chauffeur options for planned itineraries</li>
          </ul>
          <Link className="button button-gold" to="/book">DISCUSS A CORPORATE REQUIREMENT <span>↗</span></Link>
        </div>
        <div className="corporate-audience">
          <p className="corporate-audience-label">WHO WE CAN SUPPORT</p>
          <div><span>01</span><p>Companies & business teams</p></div>
          <div><span>02</span><p>NGOs & international organisations</p></div>
          <div><span>03</span><p>Embassies & visiting delegations</p></div>
          <div><span>04</span><p>Hotels, travel partners & event planners</p></div>
          <small>Each enquiry is discussed individually so the proposed transport can reflect your schedule, passenger needs and budget.</small>
        </div>
      </div>
    </section>

    <section className="closing-cta"><div className="page-shell closing-inner">
      <p className="eyebrow">YOUR JOURNEY STARTS HERE</p><h2>Make your next move<br /><em>the right one.</em></h2>
      <p>Tell us where you need to go, when you need to travel and the vehicle or service you have in mind.</p>
      <div className="hero-actions"><a className="button button-gold" href={whatsapp} target="_blank" rel="noopener noreferrer">PLAN ON WHATSAPP <span>↗</span></a><a className="button button-outline" href="mailto:falconexecutivetours@gmail.com?subject=Falcon%20Transport%20Enquiry">EMAIL AN ENQUIRY <span>↗</span></a><Link className="button button-outline" to="/quote">REQUEST A QUOTATION <span>↗</span></Link></div>
      <div className="closing-contact"><span>CALL US</span><a href="tel:+254768000540">+254 768 000 540</a><span>EMAIL</span><a href="mailto:falconexecutivetours@gmail.com">falconexecutivetours@gmail.com</a></div>
    </div></section>
  </div>
}
