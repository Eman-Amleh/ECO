import React from 'react'
import Navbar from '../web/navbar/Navbar.jsx'
import Footer from '../web/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}
