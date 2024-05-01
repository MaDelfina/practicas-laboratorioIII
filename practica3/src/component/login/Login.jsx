import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from "react";

function Login() {
    const [searchLetter, setSearchLetter] = useState("");

    const handlerSearchLetter = (event) => {
        setSearchLetter(event.target.value);
    }

    function searchLetterO(){
        if (searchLetter === '') {
            alert('Usuario inválido para registrarse');
        } else if (searchLetter.includes('o') || searchLetter.includes('O') ) {
            alert('Por favor, ¡Nombres de usuario sin la letra o!');
        } else {
            alert('¡Usuario registrado correctamente!');
        }
    }
    
    return(
        <div>
            <h5>Ingrese su nombre de usuario</h5>

            <Form.Label htmlFor="inputUserName5">Usuario</Form.Label>
            <Form.Control
                type="userName"
                id="inputUserName5"
                aria-describedby="userNameHelpBlock"
                placeholder='Ingrese su usuario'
                onChange={handlerSearchLetter}
                value={searchLetter}
            />

            <Button variant="primary" type="submit" onClick={searchLetterO}>Registrarse</Button>

            <p>{searchLetter}</p>

        </div >
    );
} 

export default Login;