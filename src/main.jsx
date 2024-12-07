import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route} from "react"
import './index.css'
import Header from './Header'
import App from './App'
import Footer from './Foter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App/>
    <Footer/>
  </StrictMode>,
)
