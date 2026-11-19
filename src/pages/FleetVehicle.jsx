import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { vehicles } from './Fleet'

const whatsappBase = 'https://wa.me/254768000540?text='

export default function FleetVehicle() {
  const { slug } = useParams()
  const vehicle = vehicles.find(item => item.slug === slug)

  if (!vehicle) {
    return <section className="vehicle-not-found">
      <p className="fleet-eyebrow">FALCON EXECUTIVE LOGISTICS</p>
      <h1>Vehicle not found.</h1>
      <p>That vehicle may have moved or the link may be incorrect.</p>
      <Link className="fleet-gold-button" to="/fleet">BACK TO THE FLEET <span>→</span></Link>
    </section>
  }

  const message = `Hello Falcon Executive Logistics, I would like to enquire about the ${vehicle.name}. Please confirm the available vehicle, specifications, availability, rates and hire terms for my dates.`
  const enquiryUrl = whatsappBase + encodeURIComponent(message)

  return <div className="vehicle-detail-page">
    <div className="vehicle-detail-top"><div className="fleet-page-shell"><Link to="/fleet">← BACK TO THE FLEET</Link><span> / {vehicle.name}</span></div></div>
    <section className="vehicle-detail-hero fleet-page-shell">
      <div className="vehicle-detail-photo"><img src={vehicle.image} alt={vehicle.alt} /></div>
      <div className="vehicle-detail-copy">
        <p className="fleet-eyebrow">FALCON COLLECTION · {vehicle.category.toUpperCase()}</p>
        <span className="vehicle-detail-label">{vehicle.label}</span>
        <h1>{vehicle.name}</h1>
        <p>{vehicle.detail}</p>
        <p className="vehicle-detail-note">Contact our team to confirm the exact vehicle, specifications, availability, rates and hire terms for your journey.</p>
        <a className="fleet-gold-button" href={enquiryUrl} target="_blank" rel="noreferrer">ENQUIRE ON WHATSAPP <span>↗</span></a>
        <Link className="vehicle-back-link" to="/fleet">Explore other vehicles</Link>
      </div>
    </section>
    <section className="vehicle-detail-information">
      <div className="fleet-page-shell vehicle-detail-information-inner">
        <div><p className="fleet-eyebrow">YOUR JOURNEY, YOUR WAY</p><h2>Arrange the right vehicle for your plans.</h2></div>
        <div><p>Share your travel dates, pick-up location, destination and passenger or luggage requirements. Our team will help confirm a suitable option and provide the booking details before you proceed.</p>
          <ul><li>Executive and personal journeys</li><li>Airport transfers and planned travel</li><li>Business, family and special occasions</li></ul>
          <a href={enquiryUrl} target="_blank" rel="noreferrer">DISCUSS THIS VEHICLE ON WHATSAPP ↗</a>
        </div>
      </div>
    </section>
    <section className="vehicle-detail-footer"><p className="fleet-eyebrow">MORE OPTIONS</p><h2>Still comparing?</h2><Link className="fleet-gold-button" to="/fleet">VIEW THE FULL FLEET <span>→</span></Link></section>
  </div>
}
