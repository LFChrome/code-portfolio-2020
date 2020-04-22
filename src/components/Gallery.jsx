import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return(
      <div className='row'>
        <div className='col-md-4'>
          <GalleryItem 
            pageURL='https://goo.gl/vJVM8x'
            imgURL='../img/tfotpe.png'
            caption='The Future of The Planet Earth'
            codeURL='https://goo.gl/f7yAi3'
          />
        </div>
        <div className='col-md-4'>
          <GalleryItem 
            pageURL='https://goo.gl/78gHWS'
            imgURL='../img/rps.png'
            caption='Rock Paper Scissors'
            codeURL='https://goo.gl/4bmSf2'
          />
        </div>
        <div className='col-md-4'>
          <GalleryItem 
            pageURL='https://goo.gl/XrxPvw'
            imgURL='../img/playlist.png'
            caption='Playlist'
            codeURL='https://goo.gl/L4SA84'
          />
        </div>
      </div>
    )
  }
}

class GalleryItem extends Component {
  render() {
    const { imgURL, caption, codeURL, pageURL } = this.props;
    if (codeURL !== undefined) {
      return(
        <div>
          <a href={pageURL}>
            <img 
              src={imgURL}
              alt={caption}
            />
          </a>
          <hr />
          <div class='caption'>
            <h3>{caption}</h3>
            <p><a href={codeURL}>CODE</a></p>
          </div>
        </div>
      )
    } else {
      return(
        <div>
          <a href={pageURL}>
            <img 
              src={imgURL}
              alt={caption}
            />
          </a>
          <hr />
          <div class='caption'>
            <h3>{caption}</h3>
            <p>CODE NOT AVAILABLE</p>
          </div>
        </div>
      )
    }
  }
}