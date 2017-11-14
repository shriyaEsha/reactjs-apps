import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Square(props) {
    let highlight = props.winner?'red':'';
    return (
      <button className={"square"+highlight} onClick={props.onClick}>
        {props.value}
      </button>
    );
}

class Board extends React.Component {
  
  renderSquare(i, win) {
    return <Square key={i} className="" winner={win} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />
  }

  render() {
    let sq = this.props.squares.slice();
    let winner = (calculateWinner(sq)!=null?calculateWinner(sq)[1]:'');
    let win = false;
    console.log(winner);
    return (
      <div>
      {
        [0,1,2].map( (row) => {
         return <div key={row} className="board-row">
            {
              [0,1,2].map( (col) => {
                win = (winner.includes(row*3+col)?true:false);

                return this.renderSquare(row*3+col, win)
                // return <Square className="" winner={false} key={row * 3 + col} value={this.props.squares[row*3+col]} onClick={() => this.props.onClick(row*3+col)}></Square>
              })
            }
            </div>

        })
      }
      </div>
    )
  }
}

class Game extends React.Component {
  constructor(){
    super();
    this.empty = {
      history : [
      {
        squares : Array(9).fill(null),
        x : null,
        y : null
      }],
      stepNumber : 0,
      Xnext : true
    };
  
    this.state = this.empty;
  }
  
  handleClick(i) {
    if(i === -1){
      this.setState(this.empty);
    }
    else if(i !== -1){
      const history = this.state.history;
      const cur = history[history.length-1];
      const squares = cur.squares.slice();
      console.log("history");
      console.log(history);
      if((calculateWinner(squares) != null && calculateWinner(squares)[0]) || squares[i])
        return;
      squares[i] = this.state.Xnext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
          x : Math.floor((i+3)/3),
          y : (i+3)%3+1

        }]),
        stepNumber : history.length,
        Xnext: !this.state.Xnext,
      });
    }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  restart(){
    console.log("restart");
    this.resetState();
  }

  render() {
    console.log("!!In render game!!");
    let status;
    const history = this.state.history;
    const cur = history[this.state.stepNumber];
    const winner = calculateWinner(cur.squares)
    console.log(history);
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move + '(' + history[move].x + ", " + history[move].y + ')':
        'Go to game start';

      let bold = (this.state.stepNumber===move?"bold":"");
      return (
        <li key={move}>
          <button className={bold} onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    if (winner) {
      status = 'Winner: ' + winner[0];
      this.state.winner = winner[1];
    } else {
      status = 'Next player: ' + (this.state.Xnext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={cur.squares} onClick={(i) => this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <button onClick={() => this.handleClick(-1)}>Restart</button>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], lines[i]];
    }
  }
  return null;
}
// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

