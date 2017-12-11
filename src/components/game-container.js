import React from 'react';

import './game-container.css';

export default function GameContainer() {
  return (
    <section className="game">
      <h2 id="feedback">Make your Guess!</h2>
      <form>
        <input type="text" name="userGuess" id="userGuess" className="text" placeholder="Enter your Guess" required="" />
          <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
      </form>
      <p>Guess #<span id="count">0</span>!</p>
      <ul id="guessList" className="guessBox clearfix">

      </ul>
    </section>
  )
}
