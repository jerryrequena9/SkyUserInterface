import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ClientView from './ClientView'
import LoginForm from './LoginForm'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClientView/>
    <LoginForm/>
  </StrictMode>,
)
