import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-8'>
          <h1>About Me:</h1>
          <p>
            Hello, my name is Wei Wu Lu. I am currently a third year at University of California - Davis and planning to major
            in Mathematics. I plan on continuing Mathematics in Graduate School, but as a side I like to code.
          </p>
          <p>
            My favorite hobbies include playing videogames, playing board games and watching S.T.E.M. videos on YouTube.
          </p>
        </div>
        <div className='col-md-4'>
          <h4>Contact Information:</h4>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">E-mail: weiwulu2001@gmail.com</li>
            <li class="list-group-item">Phone: +1 (415) 987-2324</li>
            <li class="list-group-item"><a href='https://www.linkedin.com/in/wei-wu-lu/'>LinkedIn</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

