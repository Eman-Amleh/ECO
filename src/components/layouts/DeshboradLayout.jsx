import React from 'react'
import Footer from '../deshborad/footer/Footer.jsx'
import Navber from '../deshborad/navbar/Navber.jsx'
import { Outlet } from 'react-router-dom'


export default function DeshboradLayout() {
  return (
    <div>
        <Navber/>
        <Outlet/>
      <Footer/>
    </div>
  )
}
