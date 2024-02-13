import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      
      <div className='cont'>
      <h1>Count is {count}</h1>
      </div>
      <div className="card">
        <button  className="btn"onClick={() => setCount((count) => count + 1)}>
          ADD
        </button>
       
      </div>
      
    </>
  )
}

export default App
