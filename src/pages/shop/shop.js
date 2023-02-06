import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import Products from "../../pages/shop/products";
import "./product.css";
import { ShopContext } from "../../context/shop-context";

const Shop = () => {
  const { searchterm } = useContext(ShopContext);
  const newsearch = searchterm.toLowerCase();
  console.log(`second2s:${newsearch}`);

  return (
    <div className="shop">
      <div className="title">
        <h1>TechStore</h1>
      </div>
      <div className="items">
        {PRODUCTS.filter(
          (product) => {
            if (
              product.productName
                .toLowerCase()
                .includes(searchterm.toLowerCase())
            ) {
              console.log(product);
              return product;
            }
          }
          //
        ).map((item) => (
          <Products data={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
// .filter((item) => (
//   <Products data={item} />
// ))
