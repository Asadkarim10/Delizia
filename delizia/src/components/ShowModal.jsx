import { useState, useContext } from "react";
import './Showmodal.css';
import { ItemContext } from '../MyContext';
import { useParams } from "react-router-dom"
import Data from "./data"
import Card from './card'


const MyModal = ({ closehandleclick, index }) => {
  // const [filteredcard,setFilteredCard]=useState("")
  // const { id } = useParams()
  // const cardData[id-1]= useContext(ItemContext);
  // const reqdata = Data[id-1]
  // console.log(Data)
  // const [filteredcard,setFilteredCard]=useState("")
  // const reqdata = () =>{
  //   setFilteredCard(Data.filter((element)=> element.id === Card.id ))
  // }
  // console.log(reqdata())
  // const [updatemodal,setUpdatemodal] = useState([])
  const cardData = useContext(ItemContext);
  // const{id,title,price,description} = cardData
  // const selectedcard = ()=>{
  //   setUpdatemodal.map((ele)=> element.id === element.id)
  // }
  // console.log(selectedcard())


  return (
    <>
      {/* <div className="modal-wrapper" onClick={closeModal}></div> */}
      <div className="modal-wrapper" onClick={closehandleclick}></div>
      <div>
        <div className="modal-container">
          <div className="image-container">
            <img src="../Nutella.png" alt="" />
          </div>
          <div>
            <div className="caket-tle">

              <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                <h1 className="div-child">Nutella Cake</h1>
                <h1 className="div-child">Nutella Cake</h1>
              </div>

              <h2 className="div-child">Rs. 1800.00</h2>


              <p className="div-child font-light">A Guilty Pleasure That You Won't Be Able To Resist! Made From Nutella & Imported Cream!</p>


            </div>
            <div className="d-flex">
              <div className="d-flex1">
                <form>
                  <input type="radio" name="" id="1" />
                </form>
                <p>Medium</p>
              </div>
              <div>
                <p>Rs. 1800</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex1">
                <form>
                  <input type="radio" name="" id="" />
                </form>
                <p>Large</p>
              </div>
              <div>
                <p>Rs. 2950</p>
              </div>
            </div>
            <div>
              <p>Special Instructions</p>
              <form>
                <input  type="text-area" name="" id=""  />
                <textarea className="input-field" placeholder=" please enter instruction about this item if any."/>
              </form>
            </div>
            <div style={{ display:'flex', flexDirection:'row', justifyContent:'flex-start', marginTop:'10px' }}>
              <button style={{backgroundColor:'black', width:'5%', borderRadius:'10px' , color:'white', height:'40px', marginRight:'10px', fontSize:'20px'  }} >-</button>
              <button style={{backgroundColor:'black', width:'5%', borderRadius:'10px' , color:'white', height:'40px', marginRight:'10px', fontSize:'20px' }} >+</button>
              <button className="btn-font-w-h" style={{backgroundColor:'black', width:'85%', borderRadius:'8px'}} >Add To Cart</button></div>
          </div>
        </div>
      </div>
    </>
  );
};



export default MyModal;


