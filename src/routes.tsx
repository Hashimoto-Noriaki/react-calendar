import { createBrowserRouter } from 'react-router-dom'
import { TopPage } from './components/pages/TopPage'
import { LoginPage } from './components/pages/LoginPage'
import { NotLoginLayout } from './components/templates/NotLoginLayout'

export const router = createBrowserRouter([
    {path: "/",
        element:<NotLoginLayout/>,
        children:[
            {index:true,element:<TopPage/>},
            {path:"/login",element:<LoginPage/>},
        ]
    }
])
