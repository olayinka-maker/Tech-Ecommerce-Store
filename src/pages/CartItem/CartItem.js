import React from "react";
import "../cart/cart.css";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = ({ data }) => {
  //destructing all the product info from data
  const { id, productName, Price, productImage } = data;

  //getting the functions and state from context
  const { cartItems, addItem, removeItem, getNewValue, getTotalCartAmount } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  console.log(totalAmount);

  return (
    <div className="cartItems">
      <img src={productImage} />
      <div className="description">
        <h1>{productName}</h1>
        <h3>${Price}</h3>
        <div className="countHandler">
          {/* decrement button */}
          <button onClick={() => removeItem(id)}>-</button>
          <input
            className="myInput"
            value={cartItems[id]}
            onChange={(e) => getNewValue(Number(e.target.value), id)}
          />
          {/* increment button */}
          <button onClick={() => addItem(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
