import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* se debe envolver el componente App dentro de Browser router!! */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
