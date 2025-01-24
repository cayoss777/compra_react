import { useEffect, useState } from "react"

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



    <div>Pagina Compra</div>
  )
}
