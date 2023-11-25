import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <header>
        <nav>
            <Link to="/">HOME</Link>|
            <Link to="/faq">FAQ</Link>|
            <Link to="/about">ABOUT</Link>
        </nav>
    </header>
    <main>
        <h1>ENRUTADO DÍNAMICO</h1>
        <Outlet />
    </main>
    </>
  )
}

export default Layout