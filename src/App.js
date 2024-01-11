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

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay}/>
            </div>
        </div>
    )
}

export default App;