import { createContext, useState } from "react";
import { PRODUCTS } from "../products";
import useLocalStorage from "../localStorage/useLocalStorage";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartitems] = useLocalStorage("cart", getDefaultCart());
  const [searchterm, setSearchTerm] = useState("");
  //   const [cartItems, setCartitems] = useState(getDefaultCart());

  //getTotal price of all items added to cart
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      // console.log(item)
      if (cartItems[item] > 0) {
        let iteminfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * iteminfo.Price;
      }
    }
    return totalAmount;
  };

  //getting the previous amount  in the cart,then increases when user add to cart
  const addItem = (itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  //getting the previous amount  in the cart,then decreases when user remobve from cart
  const removeItem = (itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  //updating the cart amount
  const getNewValue = (newVAlue, itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: newVAlue }));
  };

  const contextValue = {
    cartItems,
    addItem,
    removeItem,
    getNewValue,
    getTotalCartAmount,
    searchterm,
    setSearchTerm,
  };
  console.log(searchterm);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
