import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Home from './Home/Home'
import About from './About/About'
import Parent from './components/parent/Parent'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Child from './components/Child/Child'
import Navbar from './components/Navbar/Navbar'   
import NoutFound from './components/NotFound/NoutFound'
import Web from './components/Web/Web'
import Mobile from './components/Mobile/Mobile'
import Gallery from './components/Gallery/Gallery'
import '@fortawesome/fontawesome-free/css/all.min.css'




let x = createBrowserRouter([
  {path: '' , element: <Layout/> ,children:[
  {index: true , element: <About/>},
  {path: 'about' , element: <About/>},
  {path: 'portfolio' , element: <Home/>},
  {path: 'contact' , element: <Parent/>},
  {path: 'startFarameWork' , element: <Gallery/> , children:[
    {index: true , element:<Web/>},
    {path:'mobile' , element:<Mobile/>},
  ]},
  {path: "*" ,element :<NoutFound/> }
  ]}, 
])

// let x = createBrowserRouter([
//   {path: 'home' , element: <Home/>},
//   {path: 'about' , element: <About/>},
//   {path: 'parent' , element: <Parent/>},
//   {path: 'child' , element: <Child/>},

// ])
function App() {

  

  
  return <RouterProvider router={x}></RouterProvider>
}

export default App
