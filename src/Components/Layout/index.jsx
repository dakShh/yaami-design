import React from 'react'
// import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div id='main'>
      {/* <Header /> */}
      <main className='min-h-screen'>{children}</main>
    </div>
  )
}

export default Layout
