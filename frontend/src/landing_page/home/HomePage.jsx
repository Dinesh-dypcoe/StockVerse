import React from 'react'
import Awards from './Awards.jsx'
import Hero from './Hero.jsx'
import Education from './Education'
import OpenAccount from '../OpenAccount.jsx'
import Navbar from '../Navbar.jsx'
import Footer from '../Footer.jsx'
import Stats from './Stats.jsx'
import Pricing from './Pricing.jsx'

function HomePage() {
  return (
    <>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
    </>
  )
}

export default HomePage