import React from "react";
import { useCart } from "react-use-cart";
import './cart.css'

const Cart = () => {
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
  if (isEmpty) return   <div style={{ backgroundColor:'black', borderRadius:'20px', display:'flex', justifyContent:'center', height:'200px', fontSize:'50px', color:'#d3ad78' }}>   
    <h1>"Your Cart Is Empty"</h1>  
    </div> 
      
  return (
    <>
      <section>
        <div>
          <div>
            <div className="Cart">
              <span className="Carts">Cart({totalUniqueItems})</span>  <span className="Carts"> Total Items: ({totalItems}){" "} </span>
            </div>
            
            <table style={{ width: '100%', display: 'flex', marginBottom:'20px', justifyContent: 'center', borderRadius: '10%' }}>
              <tbody style={{ borderRadius: '10%'  }} >
                {items.map((item, index) => (
                  <tr className="tr-brdr" key={index}>
                    <td>
                      <img src={item.image} alt="" />
                    </td>

                    <div style={{ display: 'flex', justifyContent: "space-between", backgroundColor: 'black', width: '357%' }}>
                      <div className="Items-Title"> {item.title} </div>
                      <div className="Items-Title">  {item.price}  </div>
                    </div>
                    {/* <td style={{ backgroundColor:"yellow", fontWeight:"bold" }}>{item.title}</td> <br /> */}
                    {/* <td>{item.price}</td> */}

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'center', height:'110px', alignItems:'flex-end'  }}> 
                    <span > Quantity </span> 
                    <span className="Item-Quality" >{item.quantity}</span> </div>
                    {/* <td> Quantity {item.quantity}</td> */}
                    <td><button className="border w-56 h-14 bg-slate-800 rounded 
        text-yellow-500" style={{backgroundColor:'black'}} onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                        {/* <td> Quantity {item.quantity}</td> */}
                      <button className="border w-56 h-14 bg-slate-800 rounded
        text-yellow-500" style={{backgroundColor:'black'}} onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                      <button className="border w-56 h-14 bg-slate-800 rounded
        text-yellow-500" style={{backgroundColor:'black'}} onClick={() => removeItem(item.id)}>Remove Item</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="Bottom-line" style={{ backgroundColor:'black', fontSize: "20px", color:'#d3ad78', display:'flex', flexDirection:'row', borderRadius:"10px" , alignItems:'center'}}>
          <div  >Total price : Rs.{cartTotal}</div>
        <div><button style={{backgroundColor:'black', width:'200px', height:'62px', borderRadius:10, borderColor:"#d3ad78", borderWidth:'2px'}} onClick={() => emptyCart()}> Clear Cart </button></div>
          </div>
        </div>

          <div style={{
            display:'flex',
            justifyContent:"flex-end",
            
          }}>
            <button style={{backgroundColor:'black', color:'#d3ad78', width:'200px', height:'62px', borderRadius:10, borderColor:"#d3ad78", borderWidth:'2px', marginRight:'15px', marginLeft:'5px', marginTop:'5px'}} >CheckOut</button>
          </div>


      </section>
    </>
  );
};

export default Cart;
