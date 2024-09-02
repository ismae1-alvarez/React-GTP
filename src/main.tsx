import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactGTP from './ReactGTP'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactGTP/>
  </StrictMode>,
)
