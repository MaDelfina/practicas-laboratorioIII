import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from "react";

function Login() {
    const [searchLetter, setSearchLetter] = useState("");

    const handlerSearchLetterO = (event) => {
        const value = event.target.value;
        setSearchLetter(value);
        if (value.toLowerCase().includes('o')) {
            alert('Por favor, ¡Nombres de usuario sin la letra o!');
        }
    }

    function registerUser(){
        if (searchLetter === '') {
            alert('Usuario inválido para registrarse');
        } else {
            alert('¡Usuario registrado correctamente!');
        }
    }
    
    return(
        <div>
            <Form.Label htmlFor="inputUserName5">Usuario</Form.Label>
            <Form.Control
                type="userName"
                id="inputUserName5"
                aria-describedby="userNameHelpBlock"
                placeholder='Ingrese su usuario'
                onChange={handlerSearchLetterO}
                value={searchLetter}
            />

            <Button variant="primary" type="submit" onClick={registerUser}>Registrarse</Button>

            <p>{searchLetter}</p>

        </div >
    );
} 

export default Login;