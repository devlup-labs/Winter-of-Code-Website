import { useState } from 'react'
import './App.css'



function App() {
  const [num,setNum] = useState<number>(0)
  return (
    <h1 className="text-3xl font-bold underline text-red-600 cursor-pointer" onClick={()=>setNum((val)=>val+1)}>
      woc {num}
    </h1>
  )
}

export default App
