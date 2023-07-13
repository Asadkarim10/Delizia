 import React from 'react';
// import './header.css';
// //import { FaBeer } from "react-icons/fa";

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

// Initialization for ES Users
import {
    Collapse,
    Dropdown,
    initTE,
  } from "tw-elements";
  
  initTE({ Collapse, Dropdown });




 export default function Header() {
    return ( 

        
<div class="container  mx-auto">
  <nav
    class="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <div class="container mx-auto">
        <a class="text-xl text-neutral-800 dark:text-neutral-200" href="#"
          >Navbar</a >
      </div>
    </div>
    <li>
            <a
              class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
              href="#"
              data-te-dropdown-item-ref
              >Another action</a
            >
          </li>

          <div class="relative" data-te-dropdown-ref>
        <a
          class="hidden-arrow mr-4 flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
          href="#"
          id="dropdownMenuButton1"
          role="button"
          data-te-dropdown-toggle-ref
          aria-expanded="false">
          <span class="[&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-5 w-5">
              <path
                fill-rule="evenodd"
                d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                clip-rule="evenodd" />
            </svg>
          </span>
          <span
            class="absolute -mt-2.5 ml-2 rounded-[0.37rem] bg-danger px-[0.45em] py-[0.2em] text-[0.6rem] leading-none text-white"
            >1</span
          >
        </a>
        </div>




  </nav>

  <button
        class="block border-0 bg-transparent px-2 text-neutral-400 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200"
        type="button"
        data-te-collapse-init
        data-te-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="[&>svg]:w-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
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

)

}

