import { right } from '@popperjs/core';
import React from 'react';
import './header.css';
// import { FaBeer } from "react-icons/fa";

// export default function Header() {


//     return (
//         <div className='Container'>
//             <div className='btncon'>
//                 <button className='btn' >
//                     <span>Icon</span>
//                     <div>
//                         <span className='loc' >Change Location</span>
//                         <br />
//                         <span className='loc' >Garden</span>
//                     </div>
//                 </button>
//                 <button className='btn1'>
//                     <div>
//                         <span>Icon</span>
//                         <span className='num'>021 111 359 111</span>
//                     </div>
//                 </button>
//             </div>

//             {/* logo */}
//                 <div className='logo'>
//                 <img className='headimg' src="/src/assets/LOGO.webp"  alt="" />
//                 </div>
//             <div className='lastbox'>
//             <div className='box2'>logo
//             </div>
//             <div className='box2'>logo
//             </div>
//             </div>

//         </div>

//     )
// }


//Initialization for ES Users

import {
  Collapse,
  Dropdown,
  initTE,
} from "tw-elements";

initTE({ Collapse, Dropdown });




export default function Header() {
  return (


    <div style={{ width: '100%' }}>
      <nav style={{  paddingLeft:"1%", paddingRight:"1%" }}
        class="relative flex w-full flex-wrap items-center justify-between bg-[#ffffff] py-2 text-neutral-500  hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">     
        <div>
            <button className='button1' >
             <div style={{  display:'flex' , justifyContent:'space-around'  }}>            
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke-width="4" stroke="#9e815a" class="w-6 h-6" style={{marginTop:"8px"}}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
             <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
             </svg>
             <div style={{ display:'flex',justifyContent:'flex-start'}}>
              change location
              garden</div>  
            </div>
          </button>
          <button className='button2' >
             <div style={{  display:'flex' , justifyContent:'center' , alignItems:"center"  }}>            
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40" stroke-width="2" stroke="#9e815a" class="w-6 h-6" style={{marginTop:"8px"}}>
             <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
             </svg>
              03122356654
            </div>
          </button>
        </div>

        <div style={{ display: 'flex', }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 20 20" stroke-width="1.5" stroke="black" class="w-6 h-6">
          </svg>

          <svg  aria-hidden="true" focusable="false" width="50" data-prefix="fas" data-icon="cart-shopping" class="svg-inline--fa fa-cart-shopping align-center" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 680">
            <path fill="black" d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z">
            </path>
          </svg>
          <button className='button3'
            //class="block border-0 bg-black px-2 text-neutral-400 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200"
            
            type="button"
            data-te-collapse-init
            data-te-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 23 24"
                fill="#9e815a"
                stroke="#9e815a"
                stroke-width="1.3"
                class="h-7 w-7">
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

