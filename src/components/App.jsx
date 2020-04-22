import React, { Component }  from 'react';

import { Navbar } from './Navbar';
import { About } from './About';
import { Gallery } from './Gallery'; 

import '../App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <hr/>
        <div className='container'>
          <About />
          <h1>
            My Projects:
          </h1>
          <Gallery />
        </div>
      </div>
    )
  }
}
