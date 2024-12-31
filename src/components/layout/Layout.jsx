import React from 'react'
import Footer from '../Footer/footer'
import Navbar from '../Navbar/navbar'

function Layout({Children}) {
  return (
    <div>
      {/* <Navbar/> */}
      <div className='bg-background min-h-screen'>
        {Children}
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout

