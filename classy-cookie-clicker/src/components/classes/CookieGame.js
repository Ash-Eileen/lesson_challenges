import React, { Component } from 'react';

export default class CookieGame extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      incremented: 0,
      decremented: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((state) => ({
      score: this.state.score + 1,
      incremented: this.state.incremented + 1,
    }));
  }
  decrement() {
    this.setState((state) => ({
      score: this.state.score - 1,
      decremented: this.state.decremented + 1,
    }));
  }
  render() {
    return (
      <>
        <h1>Score: {this.state.score}</h1>
        <button className='btn' onClick={this.increment}>
          Increase
        </button>
        <button className='btn' onClick={this.decrement}>
          Decrease
        </button>
        <p>
          Increased: {this.state.incremented} Decreased:{' '}
          {this.state.decremented}
        </p>
      </>
    );
  }
}
