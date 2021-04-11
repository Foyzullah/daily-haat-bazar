import React from "react";
import { useHistory } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const {
    _id,
    productName,
    productWight,
    productPrice,
    productImageUrl,
  } = props.product;
  const history = useHistory();
  const handleOnClick = (id) => {
    const url = `/checkout/${id}`;
    history.push(url);
  };
  return (
    <div className="col-md-4">
      <div className="single-product">
        <img src={productImageUrl} alt="" />
        <h3>
          {productName}-{productWight}
        </h3>
        <p>
          <strong>Price:</strong> ${productPrice}
        </p>
        <button onClick={() => handleOnClick(_id)} className="btn btn-primary">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product;
