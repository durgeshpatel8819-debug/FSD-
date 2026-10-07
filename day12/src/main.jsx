import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ImagesSlider from './ImagesSlider.jsx'
import ImagesAnimation from './ImagesAnimation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ImagesSlider />
    <ImagesAnimation />
  </StrictMode>,
)
