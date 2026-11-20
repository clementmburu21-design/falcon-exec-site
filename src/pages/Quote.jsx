import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const initial = { vehicle:'', mode:'Chauffeured', days:'', startDate:'', endDate:'', etims:false, name:'', organisation:'', kraPin:'', contactMethod:'WhatsApp', contact:'', notes:'' }

export default function Quote() {
  const [form, setForm] = useState(initial)
  const [error, setError] = useState('')
  const update = e => {
    const { name, value, type, checked } = e.target
    setForm(s => ({ ...s, [name]: type === 'checkbox' ? checked : value }))
  }
  function submit(e) {
    e.preventDefault()
    setError('')
    if (form.endDate < form.startDate) { setError('End date cannot be earlier than the start date.'); return }
    const lines = [
      'FALCON EXECUTIVE LOGISTICS — QUOTATION REQUEST', '',
      'Vehicle model: ' + form.vehicle,
      'Hire mode: ' + form.mode,
      'Number of days: ' + form.days,
      'Start date: ' + form.startDate,
      'End date: ' + form.endDate,
      'eTIMS invoice requested: ' + (form.etims ? 'Yes' : 'No'),
      'Client name: ' + form.name,
      'Company / organisation: ' + (form.organisation || 'Not provided'),
      'KRA PIN: ' + (form.kraPin || 'Not provided'),
      'Preferred contact: ' + form.contactMethod,
      'Contact details: ' + form.contact,
      'Additional details: ' + (form.notes || 'None'), '',
      'Please review my requirements and provide a quotation. I understand this is a request and not a confirmed booking.'
    ]
    const message = lines.join('\n')
    if (form.contactMethod === 'Email') {
      const subject = encodeURIComponent('Quotation Request — ' + form.vehicle)
      window.location.href = 'mailto:falconexecutivetours@gmail.com?subject=' + subject + '&body=' + encodeURIComponent(message)
    } else {
      window.location.href = 'https://wa.me/254768000540?text=' + encodeURIComponent(message)
    }
  }

  return <main className="quote-page">
    <section className="quote-hero"><p className="fleet-eyebrow">FALCON EXECUTIVE LOGISTICS · PREMIUM MOBILITY</p><h1>Request a<br/><em>quotation.</em></h1><p>Tell us what you need and we’ll prepare a transport quotation around your dates, vehicle preference and journey.</p></section>
    <section className="quote-layout fleet-page-shell">
      <aside className="quote-aside"><p className="fleet-eyebrow">A CLEAR WAY TO GET STARTED</p><h2>Your journey,<br/><em>your requirements.</em></h2><p>Complete the details and choose how you would like our team to reach you. We’ll review the request and follow up to clarify availability, rates and any applicable terms.</p><div className="quote-aside-note"><strong>PLEASE NOTE</strong><br/>Submitting this form is a quotation enquiry only. It does not confirm vehicle availability or create a reservation.</div><div className="quote-contact"><a href="tel:+254768000540">+254 768 000 540</a><a href="mailto:falconexecutivetours@gmail.com">falconexecutivetours@gmail.com</a></div></aside>
      <form className="quote-form" onSubmit={submit}>
        <div className="booking-form-heading"><span>01 / VEHICLE &amp; HIRE DETAILS</span><p>What would you like to hire?</p></div>
        <div className="booking-fields">
          <label>Vehicle model<select name="vehicle" value={form.vehicle} onChange={update} required><option value="">Select a vehicle</option><option>Toyota Land Cruiser Prado</option><option>Toyota Land Cruiser 200 Series</option><option>Range Rover</option><option>Mercedes-Benz S-Class</option><option>Mercedes-Benz E-Class</option><option>Mercedes-Benz C-Class</option><option>Mazda CX-5</option><option>Toyota Voxy</option><option>Toyota Fielder</option><option>Toyota Vitz</option><option>Other / recommend a vehicle</option></select></label>
          <label>Hire mode<select name="mode" value={form.mode} onChange={update}><option>Chauffeured</option><option>Self-driving</option></select></label>
          <label>Number of days<input type="number" min="1" name="days" value={form.days} onChange={update} placeholder="e.g. 3" required /></label>
          <label>Start date<input type="date" name="startDate" value={form.startDate} onChange={update} min={new Date().toLocaleDateString('en-CA')} required /></label>
          <label>End date<input type="date" name="endDate" value={form.endDate} onChange={update} min={form.startDate || new Date().toLocaleDateString('en-CA')} required /></label>
          <label className="quote-checkbox booking-full-field"><input type="checkbox" name="etims" checked={form.etims} onChange={update}/><span> I would like to request an eTIMS invoice</span></label>
        </div>
        <div className="booking-form-heading"><span>02 / CLIENT INFORMATION</span><p>Who should we prepare the quotation for?</p></div>
        <div className="booking-fields">
          <label>Full name<input name="name" value={form.name} onChange={update} placeholder="Your full name" required /></label>
          <label>Company / organisation<input name="organisation" value={form.organisation} onChange={update} placeholder="Company or organisation name" /></label>
          <label className="booking-full-field">KRA PIN <span className="quote-optional">(optional)</span><input name="kraPin" value={form.kraPin} onChange={update} placeholder="Enter KRA PIN if applicable" /></label>
        </div>
        <div className="booking-form-heading"><span>03 / CONTACT PREFERENCE</span><p>How would you like us to reach you?</p></div>
        <div className="booking-fields">
          <label>Preferred contact method<select name="contactMethod" value={form.contactMethod} onChange={update}><option>WhatsApp</option><option>Email</option></select></label>
          <label>{form.contactMethod === 'Email' ? 'Email address' : 'WhatsApp number'}<input name="contact" type={form.contactMethod === 'Email' ? 'email' : 'tel'} value={form.contact} onChange={update} placeholder={form.contactMethod === 'Email' ? 'name@company.com' : '+254...'} required /></label>
          <label className="booking-full-field">Additional requirements <span className="quote-optional">(optional)</span><textarea name="notes" rows="3" value={form.notes} onChange={update} placeholder="Pick-up location, destination, itinerary or any special requirements." /></label>
        </div>
        {error && <p className="booking-error" role="alert">{error}</p>}
        <button className="booking-submit" type="submit">SEND QUOTATION REQUEST <span>↗</span></button>
        <p className="booking-privacy-note">Your request opens a pre-filled WhatsApp message or email, depending on your preference. Review and send it to Falcon. Your KRA PIN is optional; only provide it if you need it included for invoicing.</p>
      </form>
    </section>
    <section className="booking-bottom"><p className="fleet-eyebrow">FALCON EXECUTIVE LOGISTICS</p><h2>Premium mobility.<br/><em>Personal service.</em></h2><Link to="/fleet" className="fleet-gold-button">EXPLORE OUR FLEET <span>→</span></Link></section>
  </main>
}
