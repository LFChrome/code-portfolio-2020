import React, { Component } from "react";

import tfotpe from '../img/tfotpe.png';
import rps from '../img/rps.png';
import playlist from '../img/playlist.png';
import giffinder from '../img/giffinder.png';
import mvpproject from '../img/mvpproject.png';
import toastermaze from '../img/toastermaze.png';
import goodolmemos from '../img/goodolmemos.png';

export class Gallery extends Component {
  render() {
    return(
      <div>
        {/*First Gallery Row*/}
        <div className='row'>
          <div className='col-md-6'>
            <GalleryItem 
              pageURL='https://goo.gl/vJVM8x'
              imgURL={tfotpe}
              caption='The Future of The Planet Earth'
              codeURL='https://goo.gl/f7yAi3'
            />
          </div>
          <div className='col-md-6'>
            <GalleryItem 
              pageURL='https://goo.gl/78gHWS'
              imgURL={rps}
              caption='Rock Paper Scissors'
              codeURL='https://goo.gl/4bmSf2'
            />
          </div>
        </div>
        {/* Second Gallery Row */}
        <div className='row'>
          <div className='col-md-6'>
            <GalleryItem 
              pageURL='https://goo.gl/XrxPvw'
              imgURL={playlist}
              caption='Playlist'
              codeURL='https://goo.gl/L4SA84'
            />
          </div>
          <div className='col-md-6'>
            <GalleryItem 
              pageURL='https://goo.gl/7HY8Js'
              imgURL={giffinder}
              caption='Gif Finder'
              codeURL='https://goo.gl/JCK3iq'
            />
          </div>
        </div>
        {/* Third Gallery Row */}
        <div className='row'>
          <div className='col-md-6'>
            <GalleryItem 
              pageURL='https://goo.gl/ifLvhj'
              imgURL={mvpproject}
              caption='Library App'
              codeURL='https://goo.gl/o1sQw8'
            />
          </div>
          <div className='col-md-6'>
            <GalleryItem 
              pageURL='https://team-toast.glitch.me/'
              imgURL={toastermaze}
              caption='Toaster Maze'
              codeURL='https://goo.gl/58Y1di'
            />
          </div>
        </div>
        {/* Fourth Gallery Row */}
        <div className='row'>
          <div className='col-md-6'>
            <GalleryItem 
              pageURL='https://lfchrome.github.io/good_ol-_memos/'
              imgURL={goodolmemos}
              caption="Good Ol' Memos"
              codeURL='https://github.com/LFChrome/good_ol-_memos'
            />
          </div>
        </div>
      </div>
    )
  }
}

class GalleryItem extends Component {
  render() {
    const { imgURL, caption, codeURL, pageURL } = this.props;
    return(
      <div>
        <a href={pageURL}>
          <img 
            className='img-thumbnail'
            src={imgURL}
            alt={caption}
          />
        </a>
        <hr />
        <div class='caption'>
          <h3>{caption}</h3>
          <p><a href={codeURL}>CODE</a></p>
        </div>
        <hr />
      </div>
    )
  }
}