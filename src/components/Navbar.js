import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    )
  }
}

export default Navbar;
