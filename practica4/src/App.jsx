import Tarea from "./components/tarea/Tarea"
import NuevaTarea from "./components/nuevaTarea/NuevaTarea"
import './App.css'
import { useState } from "react"

const TAREAS = [
  
]

function App() {
const [tareas, setTareas] = useState(TAREAS)

const agregarTarea = (nuevaTarea) => {
  setTareas([...tareas, {tarea: nuevaTarea}])
}

  return (
    <>
      <NuevaTarea agregarTarea={agregarTarea}/>
      <Tarea tareas={tareas} setTareas={setTareas}/>
    </>
  )
}

export default App;