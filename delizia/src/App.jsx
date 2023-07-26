
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
// //import './App.css'
// import Footer from './components/footer1/footer'
// import Header from "./components/header1/header"
// import Items from "./components/Items/Items"
// import Home from "./home/home"
// import Sld from './Sld'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
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


// export default App;

import Modal from './Components/Modal';
import './App.css'
 import Home from "./home/home"
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Cart from './Components/Cart'


const App = () => {
  return (
    <> 
    <BrowserRouter>
    <Routes> 
      <Route index element= {<Home/>} />
      <Route path="/Modal" element= {<Modal/>} />
      <Route path="/Cart"  element= {<Cart/>} />
      </Routes>
    
      </BrowserRouter>
    
     
  

  </>
 );
}

export default App;






