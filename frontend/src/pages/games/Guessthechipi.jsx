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

  return (
    <div>
        <Header />
        Guessthechipi
    </div>
  )
}

export default Guessthechipi