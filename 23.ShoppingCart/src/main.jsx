import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './pages/home';
import Cart from './pages/cart';


const router=createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'Cart',
    element:<Cart />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
