import React, { useEffect, useState } from 'react'

// ** Component import
import Hero from '../Components/HomePage/Hero'
// import About from '../Components/HomePage/About'
import Service from '../Components/HomePage/Service'
import Stats from '../Components/HomePage/Stats'
import CTA from '../Components/HomePage/CTA'
import Footer2 from '../Components/Footer2'
import Modal from '../Components/Modal'

// import Footer from '../Components/Footer'

const Home = () => {
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal((prev) => !prev)
  }

  useEffect(() => {
    console.log(showModal)
  }, [showModal])

  return (
    <div>
      {showModal && <Modal state={showModal} handleModal={handleModal} />}
      <Hero handleModal={handleModal} />
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
