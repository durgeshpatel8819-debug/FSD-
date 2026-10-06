import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ImagesRotator from "./imagesRotator.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    <ImagesRotator />
  </StrictMode>,
)
