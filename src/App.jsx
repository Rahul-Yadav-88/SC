import React from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './app/Home/Home'
import Services from './app/Services/Services'
import Contact from './app/Contact/Contact'
import Portfolio from './app/Portfolio/Portfolio'
import About from './app/About/About'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },


    ]
  }
])


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />

    </div>
  )
}

export default App
