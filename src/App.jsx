import Login,{Profile,Setting,UserKey} from './UserComponent'
import Home from './Exercise1'
import Counter,{Toggle} from './Hooks'

function App() {
 // alert(sum());
  return (
  /*<div>
  <h1>First Component</h1>
  <Fruit/>
  <Login/>
  <Profile/>
  <Setting/>
  <h1>{UserKey}</h1>
  </div>
  <Home/>
  <Counter/>*/
  <Toggle/>
  )
}

function Fruit(){
  return(
    <h1>Apple</h1>
  )
}

function sum(){
  return 10+10
}

export default App;

/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
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
    </>
  )
}

export default App*/
