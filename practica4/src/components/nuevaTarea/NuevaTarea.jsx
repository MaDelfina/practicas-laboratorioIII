import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import propTypes from "prop-types";

function NuevaTarea({agregarTarea}) {
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [showNuevaTarea, setShowNuevaTarea] = useState(true)

  const handlerNuevaTarea = (event) => {
    setNuevaTarea(event.target.value);
  }

  const handlerShowNuevaTarea = () => {
    setShowNuevaTarea(!showNuevaTarea);
  }

  const handlerClick = (event) => {
    event.preventDefault();
    if (nuevaTarea.trim() !== "") {
      agregarTarea(nuevaTarea);
      setNuevaTarea("");
    }
  }

  return (
    <>
      <Button onClick={handlerShowNuevaTarea}>{showNuevaTarea ? "Esconder" : "Nueva tarea"} </Button>
      {showNuevaTarea &&
        <Form onSubmit={handlerClick}>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="Nueva tarea"
                onChange={handlerNuevaTarea}
                value={nuevaTarea}
              />
            </Col>

            <Col xs="auto">
              <Button type="submit" className="mb-2">
                Agregar
              </Button>
            </Col>
          </Row>
        </Form>
      }
    </>
  )
}

NuevaTarea.propTypes = {
  agregarTarea: propTypes.func
}

export default NuevaTarea;