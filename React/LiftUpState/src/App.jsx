import './App.css'
import { useState } from 'react'
import Student from './Student'

function App() {

  const [name, setName] = useState("Saleh Mangrio");

  const changeData = (val) => {
    setName(val);
  }

  return (
    <>
      {/* Parrent Element  */}
      <h1>{name}</h1>

      {/* Child Element  */}
      <Student  />
      
    </>
  )
}

export default App
