// import React, { useState } from 'react';
// import MyModal from './ShowModal';
// import Card from './card'
// import  {ItemContext}  from '../MyContext';
// import { useContext } from 'react';
// // import Data from "./data"


// const Modal = ({index,item}) => {
//     const [showModal , setShowModal ] = useState(false);
//     const [updateModal,setUpdateModal]=useState(null)
//     const data = useContext(ItemContext)

 
//     const openhandleclick = (item) => {
//     setShowModal(true)
// // setUpdateModal(item)
//     }
//     const  closehandleclick = () => { 
//       setShowModal(false)
//     }
// return (
//     <>
//    {/* <Card setShowModal={setShowModal} openModal={openModal} key={index} data={data}/> */}
//    <Card  openhandleclick={openhandleclick} key={index} data={data}/>
//         {/* {showModal  &&<MyModal closeModal={closeModal} />} */}
//         {showModal  &&<MyModal item={item} key={index} closehandleclick={closehandleclick} />}
//     </>
//   );
// }

// export default Modal;

import React, { useState } from 'react';
import MyModal from './ShowModal';
import Card from './card'
import  {ItemContext}  from '../MyContext';
import { useContext } from 'react';
import Data from "./data"
import { Link } from 'react-router-dom';




const Modal = ({index}) => {
    const [showModal , setShowModal ] = useState(false);
    const [selectedCard, setSelectedCard] = useState();
    // const data = useContext(ItemContext)
    const  openhandleclick = () => { 
      setShowModal(true)
    }
 
    const handleclick = ({Data}) => {
    setSelectedCard(Data);
    }
    const  closehandleclick = () => { 
      setShowModal(false)
    }
return (
    <>
   {/* <Card setShowModal={setShowModal} openModal={openModal} key={index} data={data}/>
    */}
    <div className="articles" >
      {Data.map((item,index) =>{
        return(
   <Card image={item.image} price={item.price} title={item.title} description={item.description}  cardtitle={item.cardtitle} openhandleclick={openhandleclick} onClick={() => handleclick(item)} key={index}  item={item}/>
      )})}</div>
        {showModal  &&<MyModal key={index} closehandleclick={closehandleclick} selectedCard={selectedCard} />}
       <div className='flex flex-col items-center mt-7 mb-7'><Link to="/Cart"> <button className='border w-56 h-14 bg-slate-800 rounded
        text-yellow-500 '  >Go To Cart</button> </Link></div>

        
    </>
  )
}

export default Modal;











