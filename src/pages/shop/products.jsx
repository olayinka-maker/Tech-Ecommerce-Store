import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import "./product.css";

const Products = ({ data }) => {
  const { addItem, cartItems } = useContext(ShopContext);
  const { id, productImage, productName, Price } = data;

  const cartAmount = cartItems[id];
  return (
    <div className="product">
      <div className="item">
        <Link to={`/items/${id}`}>
          <img style={{ width: "12rem" }} src={productImage} />
        </Link>
        <div className="description">
          <b>{productName}</b>
          <p>{Price}</p>
        </div>
        <button
          className="addToCartBttn"
          type="button"
          onClick={() => addItem(id)}
        >
          Add to Cart{cartAmount > 0 && <>({cartAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Products;
