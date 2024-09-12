function Card({ imagen, titulo, precio, lista }) {
    const sesion = false
    return (
        <div className="card">
            <img src={imagen} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{precio}</p>
                <ul>
                    {lista.map((elemento, index) => {
                        return (
                            <li key={index}>{elemento}</li>
                        )
                    })}
                </ul>
                {sesion
                    ? <a href="#" className="btn btn-primary">Comprar</a>
                    : <a href="#" className="btn btn-primary">Iniciar sesion</a>
                }
            </div>
        </div>
    )
}

export default Card

// un componente no es más que una función
// retorna un "HTML"
// y luego se debe exportar esta función