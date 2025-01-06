import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <img className="pilt" src="https://cuadriciclos.es/wp-content/uploads/2023/07/Nobe-100-1-1-1024x576.jpg" alt="" />
        <br />
        <button className="nupp" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <div className="tekst">Kõik meie tooted</div>
    </>
  )
}

export default App
