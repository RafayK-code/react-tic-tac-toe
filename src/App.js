import { useState } from "react";
import Board from "./Board";

function App() {
    const [squares, setSquares] = useState(new Array(9).fill(null))
    const [playerTurn, setPlayerTurn] = useState(0);
    const xIsNext = playerTurn % 2 === 0;

    function handlePlay(newSquares) {
        setSquares(newSquares);
        setPlayerTurn(playerTurn + 1);
    }

    function restart() {
        setPlayerTurn(0);
        setSquares(new Array(9).fill(null));
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay}/>
            </div>
            <div className="game-info">
                <button onClick={() => restart()}>Restart game</button>
            </div>
        </div>
    )
}

export default App;