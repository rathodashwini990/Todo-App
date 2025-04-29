import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const timerRef = useRef(null)

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCount(prev => prev + 1)
      }, 1000)
    }
  }

  const pauseTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = null
  }

  const resetCount = () => {
    setCount(0)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <div className="card">
      <h1>Count: {count}</h1>

      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  )
}

export default App;