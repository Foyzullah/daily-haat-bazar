import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import "./CheckOut.css";

const CheckOut = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loggedInClient, seLoggedInClient] = useContext(UserContext);

  useEffect(() => {
    fetch(`https://tranquil-citadel-18239.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  const { productName, productPrice } = product;
  delete product._id;

  const handleCheckout = () => {
    const orderDate = new Date().toDateString("MM/dd/yyy");

    const newOrder = { ...loggedInClient, ...product, orderDate: orderDate };
    const url = `https://tranquil-citadel-18239.herokuapp.com/addOrder`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="check-out">
            <h2>Checkout</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{productName}</td>
                  <td>{productPrice}</td>
                </tr>
              </tbody>
            </table>
            <Link to="/orders">
              <button onClick={handleCheckout} className="btn btn-primary">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
