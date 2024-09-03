import React from 'react'

// ** Component import
import Hero from '../Components/HomePage/Hero'
// import About from '../Components/HomePage/About'
import Service from '../Components/HomePage/Service'
import Stats from '../Components/HomePage/Stats'
import Footer from '../Components/Footer'
import CTA from '../Components/HomePage/CTA'
import Footer2 from '../Components/Footer2'

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Stats />
      {/* <About /> */}
      <CTA />
      <Footer2 />
      {/* <Footer /> */}
    </div>
  )
}

export default Home
