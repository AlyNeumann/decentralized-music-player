
//need to import dynamic data, obviously 


import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const AlbumArt = ({ image, width, height }) => {

  
        return (
            <Carousel>
                <div>
                    <img src={image} alt="album cover art"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image} alt="album cover art"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image} alt="album cover art"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
};

export default AlbumArt;