import React, { useEffect, useState } from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import "./ManageProduct.css";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5055/allProducts`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="row">
      <div className="col-12">
        <h2>Manage Product</h2>
        <table>
          <thead>
            <tr>
              <td>Product Name</td>
              <td>Product Wight</td>
              <td>Product Price</td>
              <td>Delete Product</td>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <ProductDetails
                  product={product}
                  key={product.productName}
                ></ProductDetails>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
