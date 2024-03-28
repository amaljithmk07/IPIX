import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TopCategories.css";

const TopCategories = () => {
  const navigate = useNavigate();
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    axios
      .get(` https://api.escuelajs.co/api/v1/categories`)
      .then((data) => {
        console.log(data.data);
        setCollection(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const productViewHandler = (id) => {
    navigate(`/shop-by-category/${id}`);
  };

  return (
    <div className="topcategories-main-body">
      <div className="topcategories-sub-body">
        <div className="topcategories-heading-sec">TOP CATEGORIES</div>
        {collection.map((data) => (
          <div
            className="topcategories-card-body"
            key={data.id}
            onClick={() => productViewHandler(data.id)}
          >
            <img
              src={data.image}
              alt="</>"
              className="topcategories-card-img"
            />{" "}
            <div className="topcategories-card-data"> {data.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
