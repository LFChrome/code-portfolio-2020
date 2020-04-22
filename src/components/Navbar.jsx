import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">
          Wei Wu Lu's Portfolio
        </span>
        <span className='text-right'>
          powered by React.js
        </span>
      </nav>
    )
  }
}

