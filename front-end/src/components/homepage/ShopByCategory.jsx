import React, { useEffect, useState } from "react";
import "./ShopByCategory.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ShopByCategory = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
      .then((data) => {
        console.log(data.data);
        setCollection(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const singleView = (id) => {
    navigate(`/single-product/${id}`);
  };
  return (
    <div>
      <div className="shopbycategory-main-body">
        <div className="shopbycategory-heading-sec">SHOP BY CATEGORY</div>
        <div className="shopbycategory-sub-body">
          {collection.map((data) => (
            <div
              className="shopbycategory-card-body"
              key={data.id}
              onClick={() => singleView(data.id)}
            >
              <img
                src={data.images}
                alt="</>"
                className="shopbycategory-card-img"
              />{" "}
              <div className="shopbycategory-card-data"> {data.title}</div>
              <div className="shopbycategory-card-data">{data.price}$</div>
              <button className="shopbycategory-card-btn">
                Add to Cart <img src="/cart.png" alt="" className="cart-logo" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
