
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './Navbar'
import './Layout.css'



function Layout() {
  return (
    <>
    
      <div className="l">
      <NavBar />
        <Outlet />
      </div>
    </>
  )
}

export default Layout
