import React from 'react';
import { Player } from 'video-react';

export default function MyPlayer() {
  return (
    <Player
      playsInline
      poster="/static/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    >

    </Player>
  );
}