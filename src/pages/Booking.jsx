import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const initialForm = {
  name: '', phone: '', service: 'Chauffeur service', vehicle: '',
  date: '', returnDate: '', pickup: '', destination: '', passengers: '1',
  details: ''
}

export default function Booking() {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')
  const update = (event) => setForm(current => ({ ...current, [event.target.name]: event.target.value }))

  function submit(event) {
    event.preventDefault()
    setError('')
    if (form.returnDate && form.date && form.returnDate < form.date) {
      setError('Return date cannot be earlier than the pick-up date.')
      return
    }
    const message = [
      'Hello Falcon Executive Logistics, I would like to make a booking enquiry.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Preferred vehicle: ${form.vehicle || 'Please recommend an option'}`,
      `Pick-up date: ${form.date}`,
      `Return date: ${form.returnDate || 'Not specified'}`,
      `Pick-up location: ${form.pickup}`,
      `Destination: ${form.destination}`,
      `Passengers: ${form.passengers}`,
      `Additional details: ${form.details || 'None'}`,
      '',
      'Please confirm availability, rates and booking terms.'
    ].join('\n')
    window.location.href = 'https://wa.me/254768000540?text=' + encodeURIComponent(message)
  }

  return <main className="booking-page">
    <section className="booking-hero">
      <p className="fleet-eyebrow">FALCON EXECUTIVE LOGISTICS · PREMIUM MOBILITY</p>
      <h1>Let's plan your<br /><em>journey.</em></h1>
      <p>Share a few details and our team will help confirm a suitable vehicle or chauffeur arrangement.</p>
    </section>
    <section className="booking-content fleet-page-shell">
      <div className="booking-intro">
        <p className="fleet-eyebrow">BOOKING ENQUIRY</p>
        <h2>Tell us what you need.</h2>
        <p>This is an enquiry, not a confirmed reservation. We'll discuss availability, pricing and terms with you directly before any booking is finalised.</p>
        <div className="booking-contact"><span>NEED HELP?</span><a href="tel:+254768000540">+254 768 000 540</a><a href="mailto:falconexecutivetours@gmail.com">falconexecutivetours@gmail.com</a></div>
      </div>
      <form className="booking-form" onSubmit={submit}>
        <div className="booking-form-heading"><span>01 / YOUR DETAILS</span><p>How can we reach you?</p></div>
        <div className="booking-fields">
          <label>Full name<input name="name" value={form.name} onChange={update} placeholder="Your full name" autoComplete="name" required /></label>
          <label>Phone / WhatsApp<input name="phone" type="tel" value={form.phone} onChange={update} placeholder="+254..." autoComplete="tel" required /></label>
        </div>
        <div className="booking-form-heading"><span>02 / YOUR JOURNEY</span><p>Tell us about the trip.</p></div>
        <div className="booking-fields">
          <label>Service required<select name="service" value={form.service} onChange={update}><option>Chauffeur service</option><option>Self-drive car hire</option><option>Airport transfer</option><option>Professional driver for my own car</option><option>Corporate / group transport</option><option>Wedding or event transport</option><option>Other / not sure</option></select></label>
          <label>Preferred vehicle<select name="vehicle" value={form.vehicle} onChange={update}><option value="">Recommend a suitable option</option><option>Toyota Land Cruiser Prado</option><option>Mercedes-Benz S-Class</option><option>Mercedes-Benz C-Class</option><option>Mazda CX-5</option><option>Toyota Voxy</option><option>Toyota Fielder</option><option>Toyota Vitz</option><option>Other vehicle</option></select></label>
          <label>Pick-up date<input type="date" name="date" value={form.date} onChange={update} min={new Date().toLocaleDateString('en-CA')} required /></label>
          <label>Return date (if applicable)<input type="date" name="returnDate" value={form.returnDate} onChange={update} min={form.date || new Date().toLocaleDateString('en-CA')} /></label>
          <label>Pick-up location<input name="pickup" value={form.pickup} onChange={update} placeholder="e.g. JKIA, Westlands, Nairobi" required /></label>
          <label>Destination<input name="destination" value={form.destination} onChange={update} placeholder="Where are you going?" required /></label>
          <label>Number of passengers<select name="passengers" value={form.passengers} onChange={update}>{Array.from({length:20},(_,i)=><option key={i+1} value={String(i+1)}>{i+1}</option>)}</select></label>
          <label className="booking-full-field">Additional details<textarea name="details" value={form.details} onChange={update} placeholder="Return journey, flight details, luggage, itinerary or anything else we should know." rows="4" /></label>
        </div>
        {error && <p className="booking-error" role="alert">{error}</p>}
        <button className="booking-submit" type="submit">SEND BOOKING ENQUIRY ON WHATSAPP <span>↗</span></button>
        <p className="booking-privacy-note">Your enquiry will open WhatsApp with these details ready to send to Falcon Executive Logistics. Nothing is submitted until you press Send in WhatsApp.</p>
      </form>
    </section>
    <section className="booking-bottom"><p className="fleet-eyebrow">FALCON EXECUTIVE LOGISTICS</p><h2>Premium mobility.<br /><em>Personal service.</em></h2><Link to="/fleet" className="fleet-gold-button">EXPLORE OUR FLEET <span>→</span></Link></section>
  </main>
}
