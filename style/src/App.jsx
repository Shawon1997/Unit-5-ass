import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'
import {Button} from "./components/button"
//import {Flex} from "./components/flex"

function App() {
  const [count, setCount] = useState("true")
//const themechange=()=>{
//  setCount(count==="dark"?"light":"dark")
//}
  return (
   
    <div className="App">
    
    <Button bg={count}>bg color change </Button>
    <Button color={count}>color change </Button>
    </div>
  )
}

export default App
