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

  useEffect(() => {
    const handleMouseLeave = (e) => {
      // Check if mouse leaves the top of the viewport and if modal has not been shown in the session
      if (e.clientY <= 0 && !sessionStorage.getItem('modalShown')) {
        setShowModal(true)
        sessionStorage.setItem('modalShown', 'true') // Mark as shown in session
      }
    }

    // Add the event listener for mouseleave
    document.addEventListener('mouseleave', handleMouseLeave)

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div>
      {showModal && <Modal state={showModal} handleModal={handleModal} />}
      <Hero handleModal={handleModal} />
      <Service />
      <Stats />
      <CTA />
      <Footer2 />
    </div>
  )
}

export default Home
