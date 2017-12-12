import React from 'react';
import './guess-history.css';

export default function GuessHistory(props) {
  const guessList = props.guessHistory.map( (guess, index) => <li key={index}>{guess}</li>);
  return (
    <div>
      <p>Guess #<span id="count">{props.guessCount}</span>!</p>
      <ul id="guessList" className="guessBox clearfix">
        {guessList}
      </ul>
    </div>
  )
}
