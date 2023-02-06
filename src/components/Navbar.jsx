import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { ShopContext } from "../context/shop-context";

const Navbar = () => {
  // const [query, setQuery] = useState("");
  const [filteredSearch, setFilteredSearch] = useState("");
  const [cartCount, setCartCount] = useState("");
  const { setSearchTerm, searchterm } = useContext(ShopContext);
  // const getQueryItems = () => {
  //   PRODUCTS.filter((item) => {
  //     if (query === "") {
  //       return item;
  //     } else if (item.productName.toLowerCase().includes(query.toLowerCase())) {
  //       return item;
  //     }
  //     // console.log(item);
  //   });
  // };
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h1>Tech Store</h1>
        </Link>
      </div>
      <form
        className="myForm"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {/* <label htmlFor="search" style={{ fontSize: "25px" }}>
          Search:
        </label> */}
        <input
          className="inputsearch"
          value={searchterm}
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a product..."
        />
      </form>
      <div className="links">
        <Link to="/">
          <div className="options">
            <span className="greeting">Hello,User</span>
            <span className="signup">sign up</span>
          </div>
        </Link>
        <Link to="/">
          <div className="options">
            <span className="greeting">Returns </span>
            <span className="signup">&Orders</span>
          </div>
        </Link>
        <Link to="/cart">
          <div className="cart_box">
            <ShoppingCart size={32} />
            <p className="cartAmount">{2}</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
