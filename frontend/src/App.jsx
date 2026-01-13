import { useState } from 'react'

import LogoCP from './assets/logo_chipipark.png'

import './App.css'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Hola Chipi Park
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer></Footer>
    </>
  )
}

export default App
