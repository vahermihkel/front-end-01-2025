import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// Navigeerimises/URL vahetuseks
// 1. npm i react-router-dom
// 2. import BrowserRouter
// 3. App ümbritseda BrowserRouteriga
// 4. App.jsx failis URL ja HTMLi seoseid

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)