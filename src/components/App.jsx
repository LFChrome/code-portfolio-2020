import React, { Component }  from 'react';

import { Navbar } from './Navbar';
import { About } from './About';
import { Gallery } from './Gallery'; 

import '../App.css';

export class App extends Component {
  render() {
    return (
      <div className='container'>
        <Navbar/>
        <Gallery />
        <About />
      </div>
    )
  }
}
