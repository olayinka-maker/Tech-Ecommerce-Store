import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../products";
import "../Slug/slug.css";
import { ShopContext } from "../context/shop-context";

const Slug = () => {
  const { id } = useParams();
  const update = PRODUCTS.find((product) => product.id === Number(id));
  const { addItem } = useContext(ShopContext);

  return (
    <div className="slug">
      <div className="slugCover">
        <div className="slugContainer">
          <img src={update.productImage} />
          <div className="slugInfo">
            <h2>{update.productName} 14 pro max</h2>
            <p>${update.Price}</p>
            <p>{update.description}</p>
            <div>
              <button
                className="slugaddToCartBttn"
                type="button"
                onClick={() => addItem(id)}
              >
                <>Add to Cart</>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-details">
        <h3>Prouct Details</h3>
        <p>
          lorem ipsunContrary to popular belief, Lorem Ipsum is not simply
          random text. It has roots in a piece of classical Latin literature
          from 45 BC, making it over 2000 years old The iPhone 14 Pro Max is the
          latest flagship smartphone from Apple, announced on September 2022.It
          features a 6.7-inch Super Retina XDR display with ProMotion
          technology, which provides a high resolution and fast refresh rate for
          an immersive viewing experience.The device is powered by Apples latest
          A16 Bionic chip, which offers fast performance and improved
          efficiency.It comes with a triple-camera system which includes a 12MP
          ultra-wide, wide, and telephoto lens with Night mode, ProRes video
          recording, and a LiDAR scanner for improved augmented reality
          experiences.
        </p>
      </div>
    </div>
  );
};

export default Slug;
