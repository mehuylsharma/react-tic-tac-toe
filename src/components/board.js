import { Component } from 'react';
import Square from './square';

export default class Board extends Component {
    constructor() {
        super();
        this.state = {
            prevPlayer: '',
            nextPlayer: 'X',
            currentBoard: new Array(9),
            isWon: false,
            header: 'Next Player:'
        };
    }

    renderSquare(val, index) {
        return (
            <Square value={val} index={index} onClick={() => this.changeValue(index, this.state.nextPlayer)}/>
        )
    }

    changeValue(i, val) {
        var newState = this.state.currentBoard;
        var next = this.state.nextPlayer === 'X' ? 'O' : 'X';
        newState[i] = val;
        this.setState({
            prevPlayer: this.state.nextPlayer,
            nextPlayer: next,
            currentBoard: newState,
            isWon: this.checkWinner()
        })
    }

    checkWinner() {
        const b = this.state.currentBoard;
        if (
            (b[0] && b[0] === b[1] && b[1] === b[2]) ||
            (b[3] && b[3] === b[4] && b[4] === b[5]) ||
            (b[6] && b[6] === b[7] && b[7] === b[8]) ||
            (b[0] && b[0] === b[3] && b[3] === b[6]) ||
            (b[1] && b[1] === b[4] && b[4] === b[7]) ||
            (b[2] && b[2] === b[5] && b[5] === b[8]) ||
            (b[0] && b[0] === b[4] && b[4] === b[8]) ||
            (b[2] && b[2] === b[4] && b[4] === b[6])
        ){
            this.declareWinner();
            return true;
        } else {
            return false;
        }
    }

    
    declareWinner() {
        this.setState({
            nextPlayer: this.state.prevPlayer,
            header: 'Winner: '
        })
    }

    resetBoard() {
        this.setState({nextPlayer: 'O', currentBoard: new Array(9).fill(' '), isWon: false, header: 'Next Player: '})
    }

    render() {
        return (
            <div className="board">
                <div className="board-head">
                    <span className="board-status">
                        {this.state.header}{this.state.nextPlayer}
                    </span>
                    <button className="board-reset" onClick={() => this.resetBoard()}>Reset Board</button>
                </div>
                <div className="board-row">
                    {this.renderSquare(this.state.currentBoard[0], 0)}
                    {this.renderSquare(this.state.currentBoard[1], 1)}
                    {this.renderSquare(this.state.currentBoard[2], 2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(this.state.currentBoard[3], 3)}
                    {this.renderSquare(this.state.currentBoard[4], 4)}
                    {this.renderSquare(this.state.currentBoard[5], 5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(this.state.currentBoard[6], 6)}
                    {this.renderSquare(this.state.currentBoard[7], 7)}
                    {this.renderSquare(this.state.currentBoard[8], 8)}
                </div>
            </div>
        )
    }
}