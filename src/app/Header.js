import React from 'react'
import logo from '../assets/logo.svg'

const Header = () => (
  <div className="app-header">
    <img src={logo} className="app-logo" alt="logo" />
    <h1>Preact widget boilerplate</h1>
  </div>
)

export default Header