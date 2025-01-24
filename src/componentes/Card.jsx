
import { useState } from 'react'
import '../estilos/card.css'
export const Card = ({imagen, titulo, descripcion, precio}) => {

    const [added, setAdded] = useState(false)
    const clickQuitar=()=>{
        setAdded(false)
    }
    const clickAgregar=()=>{
        setAdded(true)
    }
  return (
    <div>Card

        <div className="tarjeta">
            <img src={imagen} alt="Imagen producto" className="tarjeta-imagen" />
                <div className="tarjeta-contenido">
                    <h3 className="tarjeta-titulo">{titulo}</h3>
                    <p className="tarjeta-descripcion">{descripcion}</p>
                    <p className="tarjeta-precio">{precio}</p>

                    {added
                    ?
                    <button
                        type="button"
                        className="boton-quitar"
                        onClick={clickQuitar}
                    
                    >Quitar del Carrito</button>
                    :
                    <button
                        type="button"
                        className="boton-agregar"
                        onClick={clickAgregar}
                    
                    >Agregar al Carrito</button>

                    }
                </div>
            </div>

    </div>

    
  )
}
