import React from 'react';
import AlbumArt from './AlbumArt'
import Header from './Header';
import './style.css';
import albumCover from "./media/img_A&T.JPEG";
import oth_alone from './media/oth_alone.mp3';
import AudioPlayer from './AudioPlayer'

function App() {
  let media = {
      title: 'Love Songs for Sick People',
      artist: 'Old Time Honey',
      sources: {
        m4a: oth_alone,
      },
      free: true,
    };

  return (
    <div className="App">
      <Header/>
      <AlbumArt image={albumCover} />
      <AudioPlayer media={media}/>
    </div>
  );
}

export default App;
