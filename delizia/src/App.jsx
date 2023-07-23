
import { createBrowserRouter, RouterProvider } from "react-router-dom"
//import './App.css'
import Footer from './components/footer1/footer'
import Header from "./components/header1/header"
import Items from "./components/Items/Items"
import Home from "./home/home"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </>
    )
  },
  {
    path: "/Footer/:id",
    element: <Footer />
  }
])



function App() {
  return <RouterProvider router={router} />
}


export default App;





