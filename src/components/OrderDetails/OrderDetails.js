import React from "react";

const OrderDetails = (props) => {
  const { productName, orderDate, productPrice } = props.order;
  return (
    <tr>
      <td>{productName}</td>
      <td>{orderDate}</td>
      <td>${productPrice}</td>
    </tr>
  );
};

export default OrderDetails;
