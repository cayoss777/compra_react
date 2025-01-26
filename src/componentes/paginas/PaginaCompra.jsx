
import { useContext } from "react"
import { Card } from "../Card"
import { ProductosContext } from "../../context/ProductosContext"
export const PaginaCompra = () => {

  //Llamar a Context
const {productos} =useContext(ProductosContext)

  return (
<>


   
    <div>Pagina Compra
    <hr/>


    <Card> </Card>

    {productos.map(producto => (
        <Card
        
          key={producto.id}
          imagen={producto.image}
          titulo={producto.title}
          descripcion={producto.description}
          precio={producto.price}

          >
        </Card>
    ))}
    </div>

    </>
  )
}
