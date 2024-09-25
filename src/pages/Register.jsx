import { useState } from "react"

function Register() {
    const [inputName, setInputName] = useState('')
    const [inputUsername, setInputUsername] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [registrado, setRegistrado] = useState(false)

    const handleInputName = (evento) => {
        setInputName(evento.target.value)
    }
    const handleInputUsername = (evento) => {
        setInputUsername(evento.target.value)
    }
    const handleInputEmail = (evento) => {
        setInputEmail(evento.target.value)
    }
    const handleInputPassword = (evento) => {
        setInputPassword(evento.target.value)
    }

    const handleForm = () => {
        if (inputName.length < 3) {
            alert("El nombre debe tener más de 3 caracteres.")
            return
        }
        if (inputUsername.length < 5) {
            alert("El nombre de usuario debe tener más de 5 caracteres.")
            return
        }
        if (!inputEmail.includes("@")) {
            alert("No es un correo.")
            return
        }
        if (inputPassword.length < 8) {
            alert("La contraseña debe contener más de 8 caracteres.")
            return
        }
        alert("Te haz registrado con éxito.")
        setRegistrado(true)
    }


    return (
        <>
            {
                !registrado
                    ? <>
                        <h1>Registro</h1>
                        <hr />
                        <form>
                            <div className="mb-3">
                                <label htmlFor="inputName" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="inputName" onChange={handleInputName} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputUsername" className="form-label">Nombre de usuario</label>
                                <input type="text" className="form-control" id="inputUsername" onChange={handleInputUsername} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail" onChange={handleInputEmail} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPassword" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="inputPassword" onChange={handleInputPassword} />
                            </div>
                        </form>
                        <button className="btn btn-primary" onClick={handleForm}>Enviar</button>
                    </>
                    : <>
                        <h1>{inputUsername}</h1>
                    </>
            }
        </>
    )
}

export default Register