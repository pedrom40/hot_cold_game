import React from 'react';

import './hot-and-cold.css';
import Navigation from './navigation';
import ShowInstructions from './show-instructions';
import GameContainer from './game-container';

export default class HotAndCold extends React.Component {
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
      feedback: 'Make your Guess!',
      showInstructions: false
    }

  }

  // sets the action based on the nav btn clicked
  setBtnClicked(btn) {console.log(btn);

    if (btn === 'close') {
      this.setState({
        showInstructions: false
      });
    }
    else if (btn === 'new') {

      // get a random number for the answer
      const randomNumber = Math.floor(Math.random() * 100 + 1);

      // reset state
      this.setState({
        answer: randomNumber,
        guesses: 0,
        history: [],
        lastGuess: '',
        feedback: 'Make your Guess!',
        showInstructions: false
      })
    }
    else if (btn === 'what') {
      this.setState({
        showInstructions: true
      });
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
  setGuess(guess) {console.log(guess);

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

  render() {

    // get a random number for the answer
    const randomNumber = Math.floor(Math.random() * 100 + 1);

    // gather settings to pass into game
    const gameSettings = {
      answer: randomNumber,
      guesses: this.state.guesses,
      history: this.state.history,
      lastGuess: this.state.lastGuess,
      feedback: this.state.feedback,
      showInstructions: this.state.showInstructions
    };

    // style code
    let showOverlay;
    if (this.state.showInstructions) {
      showOverlay = {
        display: 'block'
      }
    }
    else {
      showOverlay = {
        display: 'none'
      }
    }

    return (
      <header>
        {(this.state.showInstructions
            ? <ShowInstructions onClick={btn => this.setBtnClicked(btn)} show={showOverlay} />
            : <Navigation onClick={btn => this.setBtnClicked(btn)} />
        )}
        <h1>{this.props.gameTitle}</h1>
        <GameContainer onGuess={guess => this.setGuess(guess)} gameSettings={gameSettings} />
      </header>
    )
  }

}
