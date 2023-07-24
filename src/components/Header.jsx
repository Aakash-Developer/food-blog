import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo.png'

export default function Header() {
  return (
    <nav className="navbar bg-light">
    <div className="container">
    <Link className="navbar-brand d-flex align-items-center" to="/"><img src={Logo} alt="" style={{width:"100px"}}/><h3 className='fw-bolder text-center my-font' >Food <span className='text-success'>Blog</span></h3></Link>
    </div>
    </nav>
  )
}
