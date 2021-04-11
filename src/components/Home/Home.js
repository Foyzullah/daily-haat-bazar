import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  const [loaderSpinner, setLoaderSpinner] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5055/allProducts`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoaderSpinner(false);
      });
  }, []);
  return (
    <div className="container">
      {loaderSpinner && (
        <div className="spinner-border text-primary load-spinner" role="status">
          <span className="visually-hidden"></span>
        </div>
      )}
      <div className="row">
        {products &&
          products.map((product) => (
            <Product product={product} key={product.productName}></Product>
          ))}
      </div>
    </div>
  );
};

export default Home;
