import React, { useState } from 'react'
import Board from './Board'
import { initialBoard } from '../utils/helpers'
import { BOARD_SIZE, WALL, EMPTY, PIECE } from '../utils/constants'
import '../assets/css/game.css'

const Game = () => {

    const [history, setHistory] = useState([{ squares: initialBoard }])
    const [selectedSquares, setSelectedSquares] = useState([-1,-1])
    const [stepNumber, setStepNumber] = useState(0)

    return (
        <div className="game">
            <Board 
                squares={history[stepNumber].squares}
                selectedSquares={selectedSquares}
            />
        </div>
    )
}

export default Game