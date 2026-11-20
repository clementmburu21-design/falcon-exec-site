import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Fleet from './pages/Fleet'
import FleetVehicle from './pages/FleetVehicle'
import Booking from './pages/Booking'
import Quote from './pages/Quote'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/fleet" element={<Fleet/>} />
          <Route path="/fleet/:slug" element={<FleetVehicle/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/book" element={<Booking/>} />
          <Route path="/quote" element={<Quote/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
