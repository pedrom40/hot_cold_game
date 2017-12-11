import React from 'react';

import './hot-and-cold.css';
import Navigation from './navigation';
import GameContainer from './game-container';

export default function HotAndCold(props) {
  return (
    <header>
      <Navigation />
      <h1>{props.gameTitle}</h1>
      <GameContainer />
    </header>
  )
}
