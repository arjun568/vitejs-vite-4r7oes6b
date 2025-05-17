import { useState } from "react";
import Home from "./Exercise1"

function Counter(){

  const [count,setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
        <h1> Counter : {count} </h1>
        <button onClick={handleCount}>Add Count</button>
    </div>
  )

}

export function Toggle() {
  const [display, setDisplay] = useState(true);

  const handleDisplay = () => {
    setDisplay(!display);
  }

  return (
    <div>
      <h1> Toggle in React js </h1>

      {
        /*display? <h2> "Arjun"</h2> : null*/
      }

      <button onClick={handleDisplay}>Toggle</button>
      {
        display===true? <Home/>
        :display===false? "Arjun"
        :null
      }
    </div>
  )
}

export default Counter