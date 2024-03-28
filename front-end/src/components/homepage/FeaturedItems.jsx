import React, { useEffect, useState } from "react";
import "./FeaturedItems.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const FeaturedItems = () => {
  const navigate = useNavigate();
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products`)
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
    <div className="featureditems-main-body">
      <div className="featureditems-sub-body">

        <div className="featureditems-product-heading-sec">
          FEATURED ITEMS
        </div>
        {collection.map((data) => (
          <div
            className="featureditems-card-body"
            key={data.id}
            onClick={() => singleView(data.id)}
          >
            <img src={data.images} alt="</>" className="featureditems-card-img" />{" "}
            <div className="featureditems-card-data"> {data.title}</div>
            <div className="featureditems-card-data">{data.price}$</div>
            <button className="featureditems-card-btn">
              Add to Cart <img src="/cart.png" alt="" className="cart-logo" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
