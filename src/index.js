import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import './index.css';

class Game extends Component {
  render() {
    return (
      <div className="game">
        <Board />
      </div>
    );
  }
};

ReactDOM.render(<Game />, document.getElementById('root'));