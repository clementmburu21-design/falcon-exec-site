import React from 'react'

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-falcon-gold mb-4">Contact Us</h2>
      <p className="text-gray-300 mb-6">Get in touch for bookings, quotes, or inquiries.</p>
      <div className="space-y-3 text-gray-300 mb-8">
        <p><strong>Phone:</strong> <a href="tel:+254768000540" className="text-falcon-gold">+254 768 000 540</a></p>
        <p><strong>WhatsApp:</strong> <a href="https://wa.me/254768000540" target="_blank" rel="noreferrer" className="text-falcon-gold">Chat with us on WhatsApp</a></p>
        <p><strong>Email:</strong> <a href="mailto:falconexecutivetours@gmail.com" className="text-falcon-gold">falconexecutivetours@gmail.com</a></p>
      </div>
      <form action="#" className="bg-gray-900 p-6 rounded-lg border border-gray-700">
        <input type="text" placeholder="Full Name" className="w-full mb-3 p-2 bg-gray-800 text-white rounded" />
        <input type="email" placeholder="Email" className="w-full mb-3 p-2 bg-gray-800 text-white rounded" />
        <textarea placeholder="Message" className="w-full mb-3 p-2 bg-gray-800 text-white rounded h-28"></textarea>
        <button type="submit" className="px-5 py-2 bg-falcon-gold text-black rounded-md font-semibold">Send Message</button>
      </form>
    </div>
  )
}
