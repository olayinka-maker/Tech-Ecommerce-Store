import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/cart/cart.js";
import Shop from "./pages/shop/shop.js";
import { ShopContextProvider } from "./context/shop-context";
import Slug from "./Slug/slug";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/items/:id" element={<Slug />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
