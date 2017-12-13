import React from 'react';
import './guess-form.css';

export default class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: ''
    }
  }

  onSubmit(event) {
    event.preventDefault();

    const guess = this.state.guess.trim();
    if (guess && this.props.handleGuess) {
      this.props.handleGuess(guess);
    }

    this.setState({
      guess: ''
    });

  }

  setGuess(guess) {
    this.setState({
      guess
    })
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input type="number" id="userGuess" className="text" placeholder="Enter your Guess" required value={this.state.guess} onChange={e => this.setGuess(e.target.value)} />
        <input type="submit" name="submit" id="guessButton" className="button" value="Guess" />
      </form>
    );
  }
}
