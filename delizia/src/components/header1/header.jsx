import { right } from '@popperjs/core';
import React from 'react';
import './header.css';
//import { FaBeer } from "react-icons/fa";

        





{/* <div className='btncon'>
<button className='btn' >
    <span>Icon</span>
    <div>
        <span className='loc' >Change Location</span>
        <br />
        <span className='loc' >Garden</span>
    </div>
</button>
<button className='btn1'>
    <div>
        <span>Icon</span>
        <span className='num'>021 111 359 111</span>
    </div>
</button>
</div>

{/* logo */}
/* <div className='logo'>
<img className='headimg' src="/src/assets/LOGO.webp"  alt="" />
</div>
<div className='lastbox'>
<div className='box2'>logo
</div>
<div className='box2'>logo
</div>
</div> */


//Initialization for ES Users




import {
  Modal,
  Ripple,
  initTE,
} from "tw-elements";

initTE({ Modal, Ripple });
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";


export default function Header() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <div className='mar-top' style={{ width: '100%' }}>
      <nav style={{  paddingLeft:"1%", paddingRight:"1%" }}
        className="relative flex w-full flex-wrap items-center justify-between bg-[#ffffff]  text-neutral-500  hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">     
        <div>
            <button className='button1'>
             <div style={{  display:'flex', width:'120px' }}>            
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke-width="4" stroke="#d3ad78" className="w-6 h-6" style={{marginTop:"8px"}}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
             <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
             </svg>
             <div style={{ }}>
             <h4 >change location</h4> 
             <h4>garden</h4> 
              </div>  
          </div>
          </button>
          <button className='button2' >
             <div style={{  display:'flex', flexDirection:'row'  }}>            
             <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 30 30" stroke-width="2" stroke="#d3ad78" className="w-6 h-6" style={{marginTop:"2px"}}>
             <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
             </svg>
             <div >
              021 111 359 111
              </div>
            </div>
          </button>
        </div>


    <div  style={{ width:'102px', marginLeft:'-100px', height:'80px', opacity:"2" }} >
    <img src="./LOGO.webp" alt="Asad" />
    </div>




        <div style={{ display: 'flex', }}>
        
         <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 45 45" stroke-width="1" stroke="black" className="w-6 h-6">
          </svg>
          <div className='flex flex-col items-center'>
          <h6 style={{ marginBottom : "-6px"}}> {totalItems} </h6> 
          <svg  aria-hidden="true" focusable="false" width="35" data-prefix="fas" data-icon="cart-shopping" className="svg-inline--fa fa-cart-shopping align-center  " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 680">
          <Link to="/Cart"> 
        <path  fill="black" d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z">
            </path></Link>
          </svg></div> 
         
                  
          <button  style={{  backgroundColor:'black', height:'45px', borderRadius:'10px', width:'50px', paddingTop:6  }} 
            className="block border-0 bg-black px-2 text-neutral-400 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200"
           type="button"
            aria-label="Toggle navigation">
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#9e815a"
                marginTop='1%'
                stroke="#d3ad78"
                stroke-width="2"
                className="h-7 w-7">
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd" />
              </svg>
            </span>
          </button>
        </div>
      </nav>















    </div>
  )

}





