import Login,{Profile,Setting,UserKey} from './UserComponent'
import Home from './Exercise1'
import Counter,{Toggle,User,College} from './Hooks'
import { useState } from "react";
import Skills from './Skills';
import Clock from './Clock';

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
  <Counter/>
  <Toggle/>
  <PropsTaskClock/>
  <Skills/>
  <PropsTaskClock/>*/
  <>
  <RadioDropdown/>
  <ArrayData/>
  <ReuseCmp/>
  <NestedArray/>
  </>
  )
}

function NestedArray() {

  const collegeData=[
    {
      name: "IET Alwar",
      city: "Alwar",
      website: "www.iet.com",
      student: [
        {
          name: "Anil Sidhu",
          age: '29',
          email: "anil@test.com"
        },
        {
          name: "Peter",
          age: '20',
          email: "peter@test.com"
        },
        {
          name: "Bruce",
          age: '25',
          email: "bruce@test.com"
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Nested Looping with Component</h1>
      {
        collegeData.map((college,index)=>{
          <div key={index}>
            <h1>Name: {college.name}</h1>
            <ul>
              <li>
                <h3>City: {college.city}</h3>
              </li>
              <li>
                <h3>Website: {college.website}</h3>
              </li>
              <li>
                <h3>Students</h3>
                {
                  college.student.map((student)=>{
                    <ul>
                      <li>Name: {student.name}</li>
                    </ul>
                  })
                }
              </li>
            </ul>
          </div>
        })
      }
    </div>
  )
}

function ReuseCmp() {

  return (
    <div>
      <h1>Reuse Component in Loop</h1>
      {
        userData.map((user)=>{
          <div key={user.id}>
            <User user={user} />
          </div>
        })
      }
    </div>
  )
}

function ArrayData() {

  const userData = [
    {
      name: "Anil",
      age: "29",
      email: "anil@test.com",
      id: 1
    },
    {
      name: "Sam",
      age: "34",
      email: "sam@test.com",
      id: 1
    },
    {
      name: "Peter",
      age: "20",
      email: "peter@test.com",
      id: 1
    },
    {
      name: "Bruce",
      age: "50",
      email: "bruce@test.com",
      id: 1
    }
  ]

  return (
    <div>
      <h1>Loop in JSX with Map Function</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((user)=>{
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
          </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

function RadioDropdown() {

  const [gender,setGender]=useState('female');
  const [city,setCity]=useState('delhi');
  return (
    <div>
      <h1>Handle Radio and Dropdown</h1>
      <h4>Select Gender</h4>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" 
       value={"male"} checked={gender == 'male'} id="male" />
      <label htmlFor="male">Male</label>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" 
       value={"female"} checked={gender == 'female'} id="female" />
      <label htmlFor="female">Female</label>
      <h2>Selected Gender :{gender}</h2>
      <br /><br /><br />
      <h4>Select City</h4>
      <select onChange={(event)=>setCity(event.target.value)} defaultValue={"delhi"}>
        <option value="noida">Noida</option>
        <option value="gurgaon">Gurgaon</option>
        <option value="delhi">Delhi</option>
      </select>
      <h2>Selected City : {city}</h2>
    </div>
  )
}

function PropsTaskClock() {

  const[color,setColor] = useState("white");

  return (

    <div>
      <h1>Digital Clock in React</h1>
      <select onChange={(event)=>{setColor(event.target.value)}}>
        <option value={"white"}>White</option>
        <option value={"red"}>Red</option>
        <option value={"blue"}>Blue</option>
        <option value={"green"}>Green</option>
        <option value={"orange"}>Orange</option>
      </select>
      <br />
      <br />
      <Clock color={color}/>
    </div>
  )

}

function Props(){
  let user ={
    name : "Arjun",
    age : 27,
    email : "arjuntiwari568@gmail.com"
  }

  let collegeNames=['IET', 'DU', 'IIT', 'NIT', 'MIT'];
  const[collegeName,setCollegeName]=useState(collegeNames[0]);
  
  return (
    <>
      <h1>Props in React Js</h1>
      <User user={user}/>
      {
        collegeName && <College name={collegeName}/>
      }
      <button onClick={()=>{setCollegeName(collegeNames[2])}}>Update college name</button>
      
    </>  
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
