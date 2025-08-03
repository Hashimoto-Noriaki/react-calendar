import { createBrowserRouter } from 'react-router-dom'
import { TopPage } from '../src/components/pages/TopPage'
import { LoginPage } from '../src/components/pages/LoginPage'

export const router = createBrowserRouter([
    {path:"/",element:<TopPage/>},
    {path:"/login",element:<LoginPage/>}
])
