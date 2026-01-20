// Juego básico "Adivina el chipi"

import React, {useState, useEffect} from 'react'
import { Link } from 'react-router'

import Header from '../../components/layout/Header'

const Guessthechipi = () => {

  const [gameState, setGameState] = useState('menu')
  const [currentPokemon, setCurrentPokemon] = useState(null)
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(15)
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [showReveal, setShowReveal] = useState(false)
  const [feedback, setFeedback] = useState(null)
  const [lives, setLives] = useState(3)
  const [bestScore, setBestScore] = useState(0)

  // Lista de Pokémon con sus archivos de imagen
  const pokemons = [
    { id: 'bulbasaur', name: 'ChipiBulbasaur', type: 'Planta', generation: 1 },
    { id: 'charmander', name: 'ChipiCharmander', type: 'Fuego', generation: 1 },
    { id: 'squirtle', name: 'ChipiSquirtle', type: 'Agua', generation: 1 },
    { id: 'charizard', name: 'ChipiCharizard', type: 'Fuego', generation: 1 },
  ]

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0 && !showReveal) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && gameState === 'playing' && !showReveal) {
      handleTimeout()
    }
  }, [timeLeft, gameState, showReveal])

  function getRandomPokemon() {
    return pokemons[Math.floor(Math.random() * pokemons.length)]
  }

  function generateOptions(correctPokemon) {
    const wrongOptions = []
    while (wrongOptions.length < 3) {
      const randomPokemon = getRandomPokemon()
      if (randomPokemon.id !== correctPokemon.id && 
          !wrongOptions.find(p => p.id === randomPokemon.id)) {
        wrongOptions.push(randomPokemon)
      }
    }
    
    const allOptions = [...wrongOptions, correctPokemon]
    return allOptions.sort(() => Math.random() - 0.5)
  }

  function startGame() {
    const pokemon = getRandomPokemon()
    setGameState('playing')
    setScore(0)
    setLives(3)
    setTotalQuestions(0)
    setShowReveal(false)
    setFeedback(null)
    setSelectedOption(null)
    setTimeLeft(15)
    setCurrentPokemon(pokemon)
    setOptions(generateOptions(pokemon))
  }

  function handleTimeout() {
    setLives(lives - 1)
    setShowReveal(true)
    setFeedback({ type: 'timeout' })
    
    if (lives - 1 <= 0) {
      setTimeout(() => endGame(), 2000)
    } else {
      setTimeout(() => nextPokemon(), 2500)
    }
  }

  function handleOptionClick(option) {
    if (showReveal || selectedOption) return
    
    setSelectedOption(option)

    if (option.id === currentPokemon.id) {
      const points = Math.max(100 + (timeLeft * 10), 100)
      setScore(score + points)
      setFeedback({ type: 'correct', points })
      setShowReveal(true)
      setTimeout(() => nextPokemon(), 2000)
    } else {
      setLives(lives - 1)
      setFeedback({ type: 'wrong' })
      setShowReveal(true)
      
      if (lives - 1 <= 0) {
        setTimeout(() => endGame(), 2000)
      } else {
        setTimeout(() => nextPokemon(), 2500)
      }
    }
  }

  function nextPokemon() {
    const pokemon = getRandomPokemon()
    setTotalQuestions(totalQuestions + 1)
    setCurrentPokemon(pokemon)
    setOptions(generateOptions(pokemon))
    setSelectedOption(null)
    setTimeLeft(15)
    setShowReveal(false)
    setFeedback(null)
  }

  function endGame() {
    setGameState('gameOver')
    if (score > bestScore) {
      setBestScore(score)
    }
  }

  if (gameState == 'menu') {
    return (
      <>
          <Header />
          {/* Game Menu */}
          <div className="min-h-screen bg-linear-to-br from-red-500 via-yellow-400 to-blue-500 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🎯</div>
                <h1 className="text-4xl font-bold mb-2 bg-linear-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                  ¿Quién es ese Chipi?
                </h1>
                <p className="text-gray-600">
                  Adivina el Chipi por su silueta antes de que se acabe el tiempo
                </p>
              </div>

              {bestScore > 0 && (
                <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4 mb-6 text-center">
                  <p className="text-sm text-yellow-800 font-semibold">
                    🏆 Mejor puntuación: {bestScore}
                  </p>
                </div>
              )}

              <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-800 mb-3">📋 Cómo jugar:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">⏱️</span>
                    <span>Tienes 15 segundos por Chipi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">❤️</span>
                    <span>Tienes 3 vidas (fallos permitidos)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✅</span>
                    <span>Elige una de las 4 opciones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">⭐</span>
                    <span>Más tiempo sobrante = más puntos</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={startGame}
                className="w-full py-4 bg-linear-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white font-bold text-xl rounded-xl transition-all transform hover:scale-105 shadow-lg"
              >
                ¡Comenzar!
              </button>
              <Link to="/games">
                <button className="w-full py-4 mt-2 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold rounded-xl transition-colors">
                  Volver a Juegos
                </button>
              </Link>
            </div>
          </div>

      </>
    )
  }

  if (gameState === 'playing') {
    return (
      <div className="min-h-screen bg-linear-to-br from-red-500 via-yellow-400 to-blue-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-3xl w-full">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-3">
              <div className="bg-blue-100 px-4 py-2 rounded-lg">
                <div className="text-xs text-blue-600 font-semibold">PUNTOS</div>
                <div className="text-2xl font-bold text-blue-800">{score}</div>
              </div>
              <div className="bg-purple-100 px-4 py-2 rounded-lg">
                <div className="text-xs text-purple-600 font-semibold">POKÉMON</div>
                <div className="text-2xl font-bold text-purple-800">{totalQuestions + 1}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="text-2xl">
                  {i < lives ? '❤️' : '🖤'}
                </span>
              ))}
            </div>
          </div>

          <div className={`mb-4 px-6 py-3 rounded-lg font-bold text-2xl text-center ${
            timeLeft <= 5 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-green-100 text-green-600'
          }`}>
            ⏱️ {timeLeft}s
          </div>

          <div className="bg-linear-to-br from-yellow-100 to-red-100 rounded-2xl p-8 mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            
            <div className="text-center relative z-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                ¿Quién es ese Pokémon? 🤔
              </h2>
              
              <div className="flex justify-center items-center mb-6">
                {currentPokemon && (
                  <img
                    src={showReveal 
                      ? `/images/chipis/${currentPokemon.id}.png`
                      : `/images/chipis/silhouettes/${currentPokemon.id}.png`
                    }
                    alt="Pokémon"
                    className={`w-56 h-56 object-contain transition-all duration-500 ${
                      showReveal ? 'animate-bounce' : ''
                    }`}
                    onError={(e) => {
                      // Fallback si la imagen no existe
                      e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%23ddd"/><text x="50%" y="50%" font-size="20" text-anchor="middle" fill="%23666">Imagen no encontrada</text></svg>';
                    }}
                  />
                )}
              </div>

              {showReveal && (
                <div className="text-3xl font-bold text-gray-800 mb-4">
                  ¡Es {currentPokemon.name}!
                  <div className="text-lg text-gray-600 mt-2">
                    Tipo: {currentPokemon.type}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            {options.map((option, index) => {
              const isCorrect = option.id === currentPokemon.id;
              const isSelected = selectedOption?.id === option.id;
              
              let buttonClass = 'py-4 px-6 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg ';
              
              if (showReveal) {
                if (isCorrect) {
                  buttonClass += 'bg-green-500 text-white';
                } else if (isSelected) {
                  buttonClass += 'bg-red-500 text-white';
                } else {
                  buttonClass += 'bg-gray-300 text-gray-600';
                }
              } else {
                buttonClass += 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white';
              }
              
              return (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  disabled={showReveal || selectedOption}
                  className={buttonClass}
                >
                  {option.name}
                  {showReveal && isCorrect && ' ✓'}
                  {showReveal && isSelected && !isCorrect && ' ✗'}
                </button>
              );
            })}
          </div>

          {feedback && (
            <div className={`text-center py-4 rounded-lg font-bold text-lg ${
              feedback.type === 'correct' 
                ? 'bg-green-100 text-green-700' 
                : feedback.type === 'timeout'
                ? 'bg-orange-100 text-orange-700'
                : 'bg-red-100 text-red-700'
            }`}>
              {feedback.type === 'correct' 
                ? `✓ ¡Correcto! +${feedback.points} puntos` 
                : feedback.type === 'timeout'
                ? '⏰ ¡Se acabó el tiempo!'
                : `✗ ¡Incorrecto! Era ${currentPokemon.name}`
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
    )
  }

  if (gameState === 'gameOver') {
    return (
      <div className="min-h-screen bg-linear-to-br from-red-500 via-yellow-400 to-blue-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">
            {score >= bestScore && score > 0 ? '🏆' : '🎮'}
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            ¡Fin del Juego!
          </h2>
          
          <div className="bg-linear-to-r from-yellow-100 to-red-100 rounded-2xl p-6 my-6">
            <div className="text-5xl font-bold bg-linear-to-r from-red-600 to-blue-600 bg-clip-text text-transparent mb-2">
              {score}
            </div>
            <div className="text-gray-600 font-semibold">puntos totales</div>
          </div>

          <div className="space-y-2 mb-6 text-left bg-gray-50 rounded-xl p-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Chipis adivinados:</span>
              <span className="font-bold text-gray-800">{totalQuestions} 🎯</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Puntuación promedio:</span>
              <span className="font-bold text-gray-800">
                {totalQuestions > 0 ? Math.round(score / totalQuestions) : 0} pts
              </span>
            </div>
            {score >= bestScore && score > 0 && (
              <div className="flex justify-between text-yellow-600 pt-2 border-t border-gray-200">
                <span className="font-bold">¡Nuevo récord! 🎉</span>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <button
              onClick={startGame}
              className="w-full py-3 bg-linear-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all transform hover:scale-105"
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
    )
  }
  
}

export default Guessthechipi