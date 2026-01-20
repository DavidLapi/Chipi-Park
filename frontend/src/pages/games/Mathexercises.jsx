import React, {useState, useEffect, useRef } from 'react'

import Header from '../../components/layout/Header'

const Mathexercises = () => {
  const [gameState, setGameState] = useState('menu') // menu, playing, gameOver
  const [difficulty, setDifficulty] = useState(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [userAnswer, setUserAnswer] = useState('')
  const [streak, setStreak] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [feedback, setFeedback] = useState(null)
  const inputRef = useRef(null)

  const difficulties = {
    facil: { name: 'Fácil', time: 90, range: 10, operations: ['+', '-'] },
    medio: { name: 'Medio', time: 60, range: 50, operations: ['+', '-', '×'] },
    dificil: { name: 'Difícil', time: 45, range: 100, operations: ['+', '-', '×', '÷'] }
  };

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && gameState === 'playing') {
      endGame()
    }
  }, [timeLeft, gameState])

  useEffect(() => {
    if (gameState === 'playing' && inputRef.current) {
      inputRef.current.focus()
    }
  }, [currentQuestion, gameState])

  function generateQuestion(diff) {
    const config = difficulties[diff]
    const operations = config.operations
    const operation = operations[Math.floor(Math.random() * operations.length)]
    
    let num1 = Math.floor(Math.random() * config.range) + 1
    let num2 = Math.floor(Math.random() * config.range) + 1
    let answer

    switch (operation) {
      case '+':
        answer = num1 + num2
        break
      case '-':
        if (num2 > num1) [num1, num2] = [num2, num1]
        answer = num1 - num2
        break
      case '×':
        num1 = Math.floor(Math.random() * 12) + 1
        num2 = Math.floor(Math.random() * 12) + 1
        answer = num1 * num2
        break;
      case '÷':
        answer = Math.floor(Math.random() * 12) + 1
        num2 = Math.floor(Math.random() * 12) + 1
        num1 = answer * num2
        break;
      default:
        answer = num1 + num2
    }

    return { num1, num2, operation, answer }
  }

  function startGame(diff) {
    setDifficulty(diff)
    setGameState('playing')
    setScore(0)
    setStreak(0)
    setTimeLeft(difficulties[diff].time)
    setCurrentQuestion(generateQuestion(diff))
    setUserAnswer('')
    setFeedback(null)
  }

  function endGame() {
    setGameState('gameOver')
    if (score > bestScore) {
      setBestScore(score)
    }
  }

  function checkAnswer() {
    const answer = parseInt(userAnswer)
    
    if (answer === currentQuestion.answer) {
      const points = difficulty === 'facil' ? 10 : difficulty === 'medio' ? 15 : 20
      const bonusPoints = Math.floor(streak / 5) * 5
      setScore(score + points + bonusPoints)
      setStreak(streak + 1)
      setFeedback({ type: 'correct', points: points + bonusPoints })
    } else {
      setStreak(0)
      setFeedback({ type: 'wrong', correct: currentQuestion.answer })
    }

    setTimeout(() => {
      setCurrentQuestion(generateQuestion(difficulty))
      setUserAnswer('')
      setFeedback(null)
    }, 800)
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter' && userAnswer !== '') {
      checkAnswer()
    }
  }

  if (gameState === 'menu') {
    return (
      <div>
          <Header />
          {/** Game menu */}
          <div className="min-h-screen bg-linear-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🧮</div>
                  <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    Matemáticas Rápidas
                  </h1>
                  <p className="text-gray-600">
                    Mejora tu agilidad mental resolviendo operaciones contrarreloj
                  </p>
                </div>

                {bestScore > 0 && (
                  <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4 mb-6 text-center">
                    <p className="text-sm text-yellow-800 font-semibold">
                      🏆 Mejor puntuación: {bestScore}
                    </p>
                  </div>
                )}

                <div className="space-y-3">
                  <button
                    onClick={() => startGame('facil')}
                    className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg"
                  >
                    <div className="text-lg">🌱 Fácil</div>
                    <div className="text-sm opacity-90">90 segundos • Suma y resta</div>
                  </button>

                  <button
                    onClick={() => startGame('medio')}
                    className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg"
                  >
                    <div className="text-lg">⚡ Medio</div>
                    <div className="text-sm opacity-90">60 segundos • Multiplicación incluida</div>
                  </button>

                  <button
                    onClick={() => startGame('dificil')}
                    className="w-full py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg"
                  >
                    <div className="text-lg">🔥 Difícil</div>
                    <div className="text-sm opacity-90">45 segundos • Todas las operaciones</div>
                  </button>
                </div>
              </div>
            </div>
      </div>
    )
  }

  if (gameState === 'playing') {
    return (
      <>
        <Header />
        {/* Game playing */}
        <div className="min-h-screen bg-linear-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-4">
                <div className="bg-blue-100 px-4 py-2 rounded-lg">
                  <div className="text-xs text-blue-600 font-semibold">PUNTOS</div>
                  <div className="text-2xl font-bold text-blue-800">{score}</div>
                </div>
                <div className="bg-orange-100 px-4 py-2 rounded-lg">
                  <div className="text-xs text-orange-600 font-semibold">RACHA</div>
                  <div className="text-2xl font-bold text-orange-800">{streak} 🔥</div>
                </div>
              </div>
            
              <div className={`px-6 py-2 rounded-lg font-bold text-2xl ${
                timeLeft <= 10 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-green-100 text-green-600'
              }`}>
                ⏱️ {timeLeft}s
              </div>
            </div>

            {streak >= 5 && streak % 5 === 0 && (
              <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-3 mb-4 text-center animate-pulse">
                <p className="text-yellow-800 font-bold">
                  🎉 ¡Racha de {streak}! +{Math.floor(streak / 5) * 5} puntos bonus
                </p>
              </div>
            )}

            <div className="bg-linear-to-br from-indigo-100 to-purple-100 rounded-2xl p-12 mb-6">
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-800 mb-8">
                  {currentQuestion.num1} {currentQuestion.operation} {currentQuestion.num2} = ?
                </div>

                <div className="space-y-4">
                  <input
                    ref={inputRef}
                    type="number"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full text-4xl font-bold text-center py-4 px-6 rounded-xl border-4 border-indigo-300 focus:border-indigo-500 focus:outline-none"
                    placeholder="?"
                    autoFocus
                  />
                  <button
                    onClick={checkAnswer}
                    disabled={userAnswer === ''}
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold text-xl rounded-xl transition-all transform hover:scale-105 shadow-lg"
                  >
                    Comprobar ✓
                  </button>
                </div>
              </div>
            </div>

            {feedback && (
              <div className={`text-center py-3 rounded-lg font-bold text-lg ${
                feedback.type === 'correct' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {feedback.type === 'correct' 
                  ? `✓ ¡Correcto! +${feedback.points} puntos` 
                  : `✗ Incorrecto. La respuesta era ${feedback.correct}`
                }
              </div>
            )}

            <button
              onClick={() => setGameState('menu')}
              className="mt-4 w-full py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold rounded-lg transition-colors"
            >
              Volver al menú
            </button>
          </div>
        </div>
      </>
    )
  }

  if (gameState === 'gameOver') {
    return (
      <>
        <Header />
        {/* Game Over */}
        <div className="min-h-screen bg-linear-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
            <div className="text-6xl mb-4">
              {score >= bestScore && score > 0 ? '🏆' : '🎯'}
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              ¡Tiempo agotado!
            </h2>
          
            <div className="bg-linear-to-r from-purple-100 to-pink-100 rounded-2xl p-6 my-6">
              <div className="text-5xl font-bold text-purple-600 mb-2">
                {score}
              </div>
              <div className="text-gray-600 font-semibold">puntos</div>
            </div>

            <div className="space-y-2 mb-6 text-left bg-gray-50 rounded-xl p-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Mejor racha:</span>
                <span className="font-bold text-gray-800">{streak} 🔥</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Dificultad:</span>
                <span className="font-bold text-gray-800">{difficulties[difficulty].name}</span>
              </div>
              {score >= bestScore && score > 0 && (
                <div className="flex justify-between text-yellow-600">
                  <span className="font-bold">¡Nuevo récord! 🎉</span>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <button
                onClick={() => startGame(difficulty)}
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all transform hover:scale-105"
              >
                Jugar de nuevo
              </button>
              <button
                onClick={() => setGameState('menu')}
                className="w-full py-3 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold rounded-xl transition-colors"
              >
                Volver al menú
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Mathexercises