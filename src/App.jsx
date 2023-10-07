import { useState } from "react"

 const App = () => {

   const [a, setA] =  useState(0)

   const handleClick = () => {
     setA(a => a + 1)
   }
  return (
    <div>
      <h1>Hello World!</h1>
      <h1>{a}</h1>
      <button onClick={()=>handleClick()}>ok</button>
    </div>
  )
}

export default App
