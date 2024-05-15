import { useState } from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import NuevaTarea from "../nuevaTarea/NuevaTarea";

const TAREAS = []

function Tarea() {
  const [tareas, setTareas] = useState(TAREAS);
  const [selectTarea, setSelectTarea] =useState([])

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, {tarea: nuevaTarea}]); 
  };

  const handlerClickTarea = (i) => {
    if (selectTarea.includes(i)) {
      setSelectTarea(selectTarea.filter((index) => index !== i));
    } else {
      setSelectTarea([...selectTarea, i]);
    }
  };

  const handlerDeleteTarea = (i) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(i, 1); //eliminar la tarea en el índice proporcionado
    setTareas(nuevasTareas);
  };

  return (
    <>
      <NuevaTarea agregarTarea={agregarTarea}/>

      <p>Sus tareas son:</p>
      <ul>
        {tareas.map((tarea, index) => (
          <li
            key={index}
            onClick={() => handlerClickTarea(index)}
            style={{
              cursor: "pointer",
              color: selectTarea.includes(index) ? "grey" : "black"
            }}
          >
            {tarea && tarea.tarea}
            <CloseButton onClick={() => handlerDeleteTarea(index)}>X</CloseButton>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tarea;