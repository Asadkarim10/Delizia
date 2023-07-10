import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import Sld from './Sld'



function App() {
  return <div>
     <Sld /> 
    
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
//     path: "/Footer/:id",
//     element: <Footer />
//   }
// ])



// function App() {
//   return <RouterProvider router={router} />
// }



export default App




