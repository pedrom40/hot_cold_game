import React from 'react';

import './game-container.css';
import GuessForm from './guess-form';
import GuessHistory from './guess-history';

export default class GameContainer extends React.Component {
  constructor(props){
    super(props);

    // get a random number for the answer
    const randomNumber = Math.floor(Math.random() * 100 + 1);

    // init the state
    this.state = {
      answer: randomNumber,
      guesses: 0,
      history: [],
      lastGuess: '',
      feedback: 'Make your Guess!'
    }

  }

  // gets the "temp" of the guess
  checkAnswer(guess) {

    // get the correct answer
    const answer = Number(this.state.answer);
    guess = Number(guess);

    // if they guessed it
    if (guess === answer) {
      return `You Guessed it, ${guess} is the correct answer!`;
    }

    // if not
    else {

      // get the difference and make sure it's a positive number
      let numRange = guess - answer;
      numRange = Math.abs(numRange);

      // determine the temp of their guess
      if (numRange <= 10) {
        return 'Hot!';
      }
      else if (numRange <= 20) {
        return 'Kinda Hot'
      }
      else {
        return 'Cold';
      }

    }

  }

  // when the user makes a guess
  onGuess(guess) {

    // update all the state values
    const guessCount = this.state.guesses + 1;
    let guessHistory = this.state.history;
    guessHistory.push(guess);

    const feedback = this.checkAnswer(guess);

    this.setState({
      guesses: guessCount,
      history: guessHistory,
      lastGuess: guess,
      feedback: feedback
    });

  }

  // render the component
  render() {
    return (
      <section className="game">
        <h2 id="feedback">{this.state.feedback}</h2>
        <GuessForm handleGuess={guess => this.onGuess(guess)} />
        <GuessHistory guessCount={this.state.guesses} guessHistory={this.state.history} />
      </section>
    );
  }

}
