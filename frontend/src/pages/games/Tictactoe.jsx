// Juego básico "Tres en raya"

import React, { useState } from 'react'
import { Link } from 'react-router'

import Header from '../../components/layout/Header'

const Tictactoe = () => {

    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    const [isPlayerX, setIsPlayerX] = useState(true)
    const [gameMode, setGameMode] = useState(null) //null, '2players', 'vsAI'

    const currentSquares = history[currentMove]
    const xIsNext = currentMove % 2 === 0

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove)
    }

    function resetGame() {
        setHistory([Array(9).fill(null)])
        setCurrentMove(0)
        setGameMode(null)
    }

    function startGame(mode, playerStarts = true) {
        setGameMode(mode)
        setIsPlayerX(playerStarts)
        setHistory([Array(9).fill(null)])
        setCurrentMove(0)
    }

    const moves = history.map((squares, move) => {
        const desc = move > 0 ? `Ir al movimiento #${move}` : 'Ir al inicio'
        return (
            <li key={move} className="mb-1">
                <button
                    onClick={() => jumpTo(move)}
                    className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                >
                    {desc}
                </button>
            </li>
        )
    })

    if (!gameMode) {
        return (
            <>
            <Header />
            {/* Game Menu */}
            <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
                    <h1 className="text-4xl font-bold text-center mb-2 text-indigo-600">
                        Tres en Raya
                    </h1>
                    <p className="text-center text-gray-600 mb-8">
                        Juega con la IA o con un amigo a este juego atemporal
                    </p>
          
                    <div className="space-y-4">
                        <button
                            onClick={() => startGame('vsAI')}
                            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
                        >
                            🤖 Jugar contra IA
                        </button>
            
                        <button
                            onClick={() => startGame('2players')}
                            className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
                        >
                            👥 Jugar con un amigo
                        </button>
                        <Link to="/games">
                            <button className="w-full py-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold rounded-xl transition-colors">
                                Volver a Juegos
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            </>
        )
    }

    return (
        <>
        <Header />
        {/* Game Start */}
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-indigo-600">Tres en Raya</h1>
                    <button
                        onClick={resetGame}
                        className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    >
                        ← Volver al menú
                    </button>
                </div>
        
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                        <Board
                            xIsNext={xIsNext}
                            squares={currentSquares}
                            onPlay={handlePlay}
                            gameMode={gameMode}
                            isPlayerX={isPlayerX}
                        />
                    </div>
          
                    <div className="lg:w-64">
                        <h2 className="text-xl font-semibold mb-4 text-gray-700">Historial</h2>
                        <ol className="space-y-1">{moves}</ol>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

function Board({ xIsNext, squares, onPlay, gameMode, isPlayerX }) {
    const winner = calculateWinner(squares)
    const winnerLine = winner ? winner.line : null

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) return
    
        if (gameMode === 'vsAI') {
            const playerSymbol = isPlayerX ? 'X' : 'O'
            const aiSymbol = isPlayerX ? 'O' : 'X'
      
            if ((xIsNext && isPlayerX) || (!xIsNext && !isPlayerX)) {
                const nextSquares = squares.slice()
                nextSquares[i] = xIsNext ? 'X' : 'O'
                onPlay(nextSquares)
        
                setTimeout(() => {
                    const aiSquares = nextSquares.slice()
                    const aiWinner = calculateWinner(aiSquares)
                    if (!aiWinner && !aiSquares.every(sq => sq !== null)) {
                        const aiMove = getBestMove(aiSquares, aiSymbol)
                        if (aiMove !== -1) {
                            aiSquares[aiMove] = aiSymbol
                            onPlay(aiSquares)
                        }
                    }
                }, 300);
            }
        } else {
            const nextSquares = squares.slice();
            nextSquares[i] = xIsNext ? 'X' : 'O';
            onPlay(nextSquares);
        }
    }

    let status
    if (winner) {
        status = `🎉 ¡Ganador: ${winner.winner}!`
    } else if (squares.every(square => square !== null)) {
        status = '🤝 ¡Empate!'
    } else {
        status = `Turno: ${xIsNext ? 'X' : 'O'}`
    }

    return (
        <div>
            <div className="text-2xl font-bold mb-6 text-center text-gray-800 bg-gray-100 py-3 rounded-lg">
                {status}
            </div>
            <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
                {squares.map((square, i) => (
                    <Square
                        key={i}
                        value={square}
                        onSquareClick={() => handleClick(i)}
                        isWinning={winnerLine && winnerLine.includes(i)}
                    />
                ))}
            </div>
        </div>
    );
}

function Square({ value, onSquareClick, isWinning }) {
    return (
        <button
            className={`
                aspect-square w-full text-4xl font-bold rounded-lg transition-all
                ${isWinning 
                    ? 'bg-green-400 text-white shadow-lg scale-105' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }
                ${value ? '' : 'hover:scale-105'}
                    shadow-md
            `}
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
  
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { winner: squares[a], line: lines[i] }
        }
    }
    return null
}

function getBestMove(squares, player) {
    const opponent = player === 'X' ? 'O' : 'X'
    let bestScore = -Infinity
    let bestMove = -1

    for (let i = 0; i < squares.length; i++) {
        if (!squares[i]) {
            squares[i] = player
            const score = minimax(squares, 0, false, player, opponent)
            squares[i] = null
      
            if (score > bestScore) {
                bestScore = score
                bestMove = i
            }
        }
    }
  
    return bestMove
}

function minimax(squares, depth, isMaximizing, player, opponent) {
    const winner = calculateWinner(squares)
  
    if (winner) {
        return winner.winner === player ? 10 - depth : depth - 10
    }
  
    if (squares.every(sq => sq !== null)) {
        return 0
    }
  
    if (isMaximizing) {
        let bestScore = -Infinity
        for (let i = 0; i < squares.length; i++) {
            if (!squares[i]) {
                squares[i] = player
                const score = minimax(squares, depth + 1, false, player, opponent)
                squares[i] = null
                bestScore = Math.max(score, bestScore)
            }
        }
        return bestScore
    } else {
        let bestScore = Infinity
        for (let i = 0; i < squares.length; i++) {
            if (!squares[i]) {
                squares[i] = opponent
                const score = minimax(squares, depth + 1, true, player, opponent)
                squares[i] = null
                bestScore = Math.min(score, bestScore)
            }
        }
        return bestScore;
    }
}

export default Tictactoe