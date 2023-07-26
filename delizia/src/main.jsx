// // import React from 'react'
// // import ReactDOM from 'react-dom/client'
// // import App from './App.jsx'
// // //import './index.css'

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// // )

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// // import Data from './Components/data.js'
// // import  data  from './MyContext';
// import { DataProvider } from './MyContext';

// // import { useContext } from "react";
// // import { BrowserRouter } from 'react-router-do

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
//   <DataProvider>
//   <App/>
//   </DataProvider>
//   </>

// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from 'react-use-cart';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <CartProvider>
  <App/>
  </CartProvider>
  </>

)

