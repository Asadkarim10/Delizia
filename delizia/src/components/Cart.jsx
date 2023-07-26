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
  if (isEmpty) return <h1>lo na lo dekh tou lo</h1>;
  return (
    <>
      <section>
        <div>
          <div>
            <h5>
              Cart({totalUniqueItems}) total Items: ({totalItems}){" "}
            </h5>
            <table>
              <tbody >
                {items.map((item, index) => (
                  <tr className="tr-brdr" key={index}>
                    <td>
                      <img src={item.image} alt="" />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td> Quantity {item.quantity}</td>
                    <td><button className="border w-56 h-14 bg-slate-800 rounded
        text-yellow-500" onClick={()=> updateItemQuantity(item.id,item.quantity -1)}>-</button>
                    <button className="border w-56 h-14 bg-slate-800 rounded
        text-yellow-500" onClick={()=> updateItemQuantity(item.id,item.quantity +1)}>+</button>
                    <button className="border w-56 h-14 bg-slate-800 rounded
        text-yellow-500" onClick={()=> removeItem (item.id)}>Remove Item</button></td>
                  </tr>
                ))}
              </tbody> 
            </table>
          </div>
          <div>Total price :{cartTotal}</div>
          <div><button onClick={()=> emptyCart()}>Clear Cart</button></div>
        </div>
      </section>
    </>
  );
};

export default Cart;
