import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Service from './pages/Service.jsx'
import Contact_Us from './pages/Contact_Us.jsx'
import About_Us from './pages/About_Us.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/Services',
    element:<Service/>
  },
  {
    path:'/Contact',
    element:<Contact_Us/>
  },
  {
    path:'/About Us',
    element:<About_Us/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
