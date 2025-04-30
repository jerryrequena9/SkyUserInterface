import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ClientView from './ClientView'
import './css/index.css'

import { BrowserRouter } from "react-router-dom"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ClientView/>
    </BrowserRouter>
  </StrictMode>,
)
