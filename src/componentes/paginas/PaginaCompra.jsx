import { useEffect, useState } from "react"
import { Card } from "../Card"
export const PaginaCompra = () => {

    const [productos, setProductos] = useState([])

    const fetchStoreApi = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data)
        setProductos(data)
    }

    useEffect(() => {
        fetchStoreApi()
    }, [])
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
