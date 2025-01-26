import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"

export const PaginaCarro = () => {

  const { listaCompras, eliminarCompra } = useContext(CarritoContext)

  return (
    <>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Descripción</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Evento</th>
    </tr>
  </thead>
  <tbody>
  {
                        listaCompras.map(item => (
                            <tr key={item.id}>
                                <th>{item.title}</th>
                                <td>{item.price}</td>
                                <td>{item.cantidad}</td>
                                <td><button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={()=>eliminarCompra(item.id)}
                                >Eliminar
                                </button>
                                </td>
                            </tr>
                        ))
                    }
  </tbody>
</table>
<div className="d-grid gap-2">
<button className="btn btn-primary"

                >COMPRAR</button>

</div>
    </>



  )
}
