import { ProductosContext } from "./ProductosContext"
import { useEffect, useState } from "react"

export const ProductosProvider = ({children}) => {

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
    <ProductosContext.Provider value={{productos}}>
        {children}
    </ProductosContext.Provider>
  )
}
