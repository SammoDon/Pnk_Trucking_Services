import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Service from './pages/Service.jsx'
import {Map, TileLayer} from "react-leaflet";



const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/Services',
    element:<Service/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
