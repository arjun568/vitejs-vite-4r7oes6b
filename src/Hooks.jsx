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

/*export function User({user}){
  console.log('user'+user.name);
  return (
    <>
      <hr/>
      <h2>Name:{user.name}</h2>
      <h2>Age:{user.age}</h2>
      <h2>Email:{user.email}</h2>
    </>
  )
}*/

export function College({name}) {

  return (
    <div>
      <hr/>
      <h1>{name}</h1>
    </div>
  )

}

export const User = ({data}) =>{
  return (
    <div style={{
        border: "1px soid green",
        padding: "10px",
        margin: "10px",
        width: "400px",
        borderRadius: "10px"
    }}
    >
      <h3>Name: <span style={{color:'green'}}>{data.name}</span></h3>
      <h3>Age: <span style={{color:'green'}}>{data.age}</span></h3>
      <h3>Email: <span style={{color:'green'}}>{data.email}</span></h3>
    </div>
  )
} 

export default Counter