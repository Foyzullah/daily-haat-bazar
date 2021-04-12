import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import OrderDetails from "../OrderDetails/OrderDetails";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInClient, setLoggedInClient] = useContext(UserContext);

  useEffect(() => {
    fetch(
      `https://tranquil-citadel-18239.herokuapp.com/orders?email=` +
        loggedInClient.email
    )
      .then((res) => res.json())
      .then((order) => {
        setOrders(order);
      });
  }, [loggedInClient.email]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="order-title">Your Order Summery</h3>
          <table>
            <thead>
              <tr>
                <td>Product Name</td>
                <td>Checkout Date</td>
                <td>Payable Amount</td>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order) => (
                  <OrderDetails order={order} key={order._id}></OrderDetails>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
