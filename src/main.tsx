import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import "./styles/output.css"
import "./styles/destyle.css"
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { LoginUserProvider } from './providers/LoginUserProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginUserProvider>
      <RouterProvider router={router} />
    </LoginUserProvider>
  </React.StrictMode>
)
