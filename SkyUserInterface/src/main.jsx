import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ClientView from './ClientView'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClientView/>
  </StrictMode>,
)
