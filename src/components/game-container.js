import React from 'react';

import './game-container.css';
import GuessForm from './guess-form';
import GuessHistory from './guess-history';

export default function GameContainer(props) {
  return (
    <section className="game">
      <h2 id="feedback">{props.gameSettings.feedback}</h2>
      <GuessForm handleGuess={guess => props.onGuess(guess)} />
      <GuessHistory guessCount={props.gameSettings.guesses} guessHistory={props.gameSettings.history} />
    </section>
  )
}
