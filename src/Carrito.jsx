import { Route, Routes,Navigate } from "react-router-dom"
import { NavBar } from "./componentes/NavBar"

import { PaginaCompra } from "./componentes/paginas/PaginaCompra"
import { PaginaCarro } from "./componentes/paginas/PaginaCarro"
export const Carrito = () => {
  return (
    <>
        
            <div>
                <h5>Carrito compra web con React</h5>
                <NavBar>

                </NavBar>

                <div className="container">
            <Routes>
                <Route>

                </Route>

                <Route path='/' element={<PaginaCompra></PaginaCompra>}></Route>
                <Route path='/carrito' element={<PaginaCarro></PaginaCarro>}></Route>
                <Route path='/*' element={<Navigate to='/' />}></Route>
            </Routes>
            </div>
        </div>
    </>
  )
}
