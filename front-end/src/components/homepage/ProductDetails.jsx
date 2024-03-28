import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";


const ProductDetails = () => {

  const { id } = useParams();

  const [singleproduct, setSingleproduct] = useState({});

  useEffect(() => {
    axios
      .get(` https://api.escuelajs.co/api/v1/products/${id}`)
      .then((data) => {
        console.log(data.data);
        setSingleproduct(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="productdetails-main-body">
          <div className="productdetails-heading-sec">PRODUCT DETAILS</div>
        <div className="productdetails-product-body">
          <div className="productdetails-product-img-sec">
            <img
              src={singleproduct.images}
              alt=""
              className="productdetails-product-img"
            />
          </div>

          <div className="productdetails-product-data">
            {singleproduct.title}
          </div>
          <div className="productdetails-product-data">
            {singleproduct.description}
          </div>
          <div className="productdetails-product-data">
            {singleproduct.price}$
          </div>

          <button className="productdetails-card-btn">
            Add to Cart{" "}
            <img src="/cart.png" alt="" className="productdetails-cart-logo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
