import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import "./styles/output.css"
import "./styles/destyle.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold text-sky-500">
        Reactの練習
      </h1>
    </div>
  </React.StrictMode>
)
