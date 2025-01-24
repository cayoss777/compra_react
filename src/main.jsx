import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { Carrito } from './Carrito.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
  <StrictMode>
    <Carrito />
  </StrictMode>,
  </BrowserRouter>
)
