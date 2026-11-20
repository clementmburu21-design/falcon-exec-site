import React from 'react'
import { Link } from 'react-router-dom'

const whatsapp = 'https://wa.me/254768000540?text=Hello%20Falcon%20Executive%20Logistics%2C%20I%27d%20like%20to%20discuss%20a%20transport%20requirement.'

const principles = [
  { number: '01', title: 'Professional coordination', text: 'Clear communication around your itinerary, service requirements and booking arrangements.', image: '/fleet/mercedes-s-class.jpg', alt: 'Premium Mercedes-Benz prepared for an executive journey' },
  { number: '02', title: 'Options for every journey', text: 'Vehicle and chauffeur arrangements for individual travel, business movements, groups and special occasions.', image: '/fleet/mazda-cx5.jpg', alt: 'SUV option from the Falcon vehicle fleet' },
  { number: '03', title: 'Nairobi headquarters, nationwide reach', text: 'Based in Nairobi and providing transport services to destinations across Kenya, subject to assignment requirements and availability.', image: '/fleet/prado-black.jpg', alt: 'Black Toyota Land Cruiser Prado for travel across Kenya' },
]

const services = [
  'Executive chauffeur services',
  'Airport transfers',
  'Premium vehicle hire',
  'Corporate and delegation transport',
  'Weddings and special events',
  'Safari and upcountry travel',
  'Professional drivers for clients’ own vehicles',
]

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-shade" />
        <div className="page-shell about-hero-content">
          <p className="eyebrow">THE FALCON STORY</p>
          <h1>Movement with<br /><em>purpose.</em></h1>
          <p>Executive mobility and tailored transport solutions, headquartered in Nairobi and serving clients across Kenya.</p>
          <a className="button button-gold" href={whatsapp} target="_blank" rel="noopener noreferrer">TALK TO OUR TEAM <span>↗</span></a>
        </div>
      </section>

      <section className="about-intro page-shell">
        <div>
          <p className="eyebrow">DISCOVER FALCON</p>
          <h2>More than getting<br /><em>from here to there.</em></h2>
        </div>
        <div className="about-intro-copy">
          <p>Falcon Executive Logistics is an executive mobility and transport services company based in Nairobi, Kenya. We arrange transport for individuals, businesses and organisations, with services shaped around each journey.</p>
          <p>From airport pickups and chauffeur-driven travel to vehicle hire, corporate movements and special events, our focus is on making the transport experience straightforward through professional service, thoughtful coordination and clear communication.</p>
          <p>Whether your journey begins in Nairobi or takes you further across the country, we welcome the opportunity to understand your requirements and propose a suitable arrangement.</p>
        </div>
      </section>

      <section className="about-principles">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">THE WAY WE WORK</p>
            <h2>Service shaped around<br />your journey.</h2>
          </div>
          <div className="about-principle-grid">
            {principles.map(({ number, title, text, image, alt }) => <article className="about-principle" key={number}>
              <div className="about-principle-image"><img src={image} alt={alt} loading="lazy" /></div>
              <div className="about-principle-content">
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="about-services page-shell">
        <div className="about-services-copy">
          <p className="eyebrow">WHAT WE ARRANGE</p>
          <h2>One partner.<br /><em>Many ways to move.</em></h2>
          <p>Our services cover everyday travel, executive requirements and planned journeys for organisations and private clients.</p>
          <Link className="button button-gold" to="/services">EXPLORE OUR SERVICES <span>↗</span></Link>
        </div>
        <div className="about-services-list">
          {services.map((service, index) => <div key={service}><span>{String(index + 1).padStart(2, '0')}</span><p>{service}</p><b>↗</b></div>)}
        </div>
      </section>

      <section className="about-coverage">
        <div className="page-shell about-coverage-inner">
          <div><p className="eyebrow">OUR BASE &amp; REACH</p><h2>Rooted in Nairobi.<br /><em>Ready for Kenya.</em></h2></div>
          <div><p>Our headquarters are in Nairobi, and we provide transport services nationwide. Tell us your destination, schedule and passenger requirements so we can discuss the right arrangement for your assignment.</p><p className="about-coverage-note">Nationwide assignments are subject to vehicle, driver and scheduling availability.</p></div>
        </div>
      </section>

      <section className="about-cta">
        <div className="page-shell">
          <p className="eyebrow">LET’S PLAN YOUR NEXT JOURNEY</p>
          <h2>Where can we<br /><em>take you?</em></h2>
          <p>Speak with Falcon Executive Logistics about your next trip, corporate requirement or event.</p>
          <div className="hero-actions">
            <Link className="button button-gold" to="/book">MAKE A BOOKING ENQUIRY <span>↗</span></Link>
            <a className="button button-outline" href={whatsapp} target="_blank" rel="noopener noreferrer">WHATSAPP US</a>
          </div>
          <div className="closing-contact"><span>CALL / WHATSAPP</span><a href="tel:+254768000540">+254 768 000 540</a><span>EMAIL</span><a href="mailto:falconexecutivetours@gmail.com">falconexecutivetours@gmail.com</a></div>
        </div>
      </section>
    </main>
  )
}
