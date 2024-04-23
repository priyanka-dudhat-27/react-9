/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  });
  return (
    <div>
      <h1 className="title">Product</h1>
      <div className="product">
        {products.map((item, index) => {
          return (
            <div key={index} className="box">
              <img src={item.image} alt="" width="200px" height="200px" />
              <p>Price:{item.price}</p>
              <p>Rating:{item.rating.rate}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
