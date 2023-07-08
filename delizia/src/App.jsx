import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
//import './App.css'
 import Footer from './components/footer/footer'
// import Apps from './components/carousel/Slider'
// import Items from './components/Items/Items'
// import Header from './components/header/header'



function App() {
  return <div>
    <Footer />
  </div>
}

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Footer />,
//     errorElement: (
//       <>
//         <h1>Oops!</h1>
//         <p>Sorry, an unexpected error has occurred.</p>
//       </>
//     )
//   },
//   {
//     path: "/footer/:id",
//     element: <Footer />
//   }
// ])



// function App() {
//   return <RouterProvider router={router} />
// }



export default App




