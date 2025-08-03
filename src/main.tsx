import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import "./styles/output.css"
import "./styles/destyle.css"
import { TopPage } from '../src/components/pages/TopPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TopPage/>
  </React.StrictMode>
)
