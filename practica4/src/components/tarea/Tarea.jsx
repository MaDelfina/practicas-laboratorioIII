import propTypes from "prop-types";
import { useState } from "react";
import CloseButton from 'react-bootstrap/CloseButton';

function Tarea({ tareas, setTareas }) {
  const [selectTarea, setSelectTarea] = useState([]); //almacena los indices de las tareas

  const handlerClickTarea = (i) => {
    if (selectTarea.includes(i)) {
      setSelectTarea(selectTarea.filter((index) => index !== i));
    } else {
      setSelectTarea([...selectTarea, i]);
    }
  };

  const handlerDeleteTarea = (i) => {
    // Elimina la tarea del array de tareas
    const nuevasTareas = tareas.filter((_, index) => index !== i);

    setTareas(nuevasTareas);
  };


  return (
    <>
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

Tarea.propTypes = {
  tareas: propTypes.array,
  setTareas: propTypes.func,
};

export default Tarea;