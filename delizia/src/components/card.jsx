// import React from 'react';
// import './card.css'


// const Card = ({openhandleclick,data ,id}) => {
//   return (
    
//     <section className="articles">
//     {data.map((item,index) =>( 
//    <article key={index} className='card'>
//      <div className="article-wrapper">
//        <div className='img-div-h'>
//          <img  className="img-h-w"  onClick={openhandleclick} src={item.image} alt={item.title} />
//          </div>
//        <div className="article-body flex flex-col items-center ">
//          <h2  className="title-f-w" onClick={openhandleclick}>{item.title}</h2>
//          <p  className='des-clr-sz-h truncate-3-lines text-center'  onClick={openhandleclick}>
//            {item.description}
//          </p>
//          <div className='div-pr-bg-br flex place-content-center'><p className='price-f-w-h' >{item.price}</p></div>
//        <div className='btn-div'><button  className="btn-font-w-h w-48 h-8 justify-center" onClick={openhandleclick}>{item.cardtitle}</button> </div>
//        </div>
//      </div>
//    </article>
//      ))}
//        </section>
   
      

//   );
// }

// export default Card;

import React, { useEffect } from 'react';
import './card.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useCart } from 'react-use-cart';

const Card = (props) => {
  const {addItem} = useCart()
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className=''  >
      <article className='card'>
        <div className="article-wrapper" >
          <div className='img-div-h'>
            <img className="img-h-w"  src={props.image} alt={props.title} onClick={props.openhandleclick} />
          </div>
          <div className="article-body flex flex-col items-center ">
            <h2 className="title-f-w">{props.title}</h2>
            <p className='des-clr-sz-h truncate-3-lines text-center'>{props.description}</p>
            <div className='div-pr-bg-br flex place-content-center'>
              <p className='price-f-w-h'>From Rs.{props.price}</p>
            </div>
            <div className='btn-div' >
              <button className="btn-font-w-h w-48 h-8 justify-center" onClick={()=>addItem(props.item)}>
                {props.cardtitle}
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Card;




