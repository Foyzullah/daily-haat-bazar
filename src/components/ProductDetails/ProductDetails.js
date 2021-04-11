import React from "react";
import "./ProductDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = (props) => {
  const { _id, productName, productWight, productPrice } = props.product;

  const handleDelete = (id) => {
    fetch(`http://localhost:5055/deleteProduct/${id}`, {
      method: "DELETE",
    });
  };
  return (
    <tr>
      <td>{productName}</td>
      <td>{productWight}</td>
      <td>{productPrice}</td>
      <td>
        <FontAwesomeIcon
          onClick={() => handleDelete(_id)}
          className="icon"
          icon={faTrashAlt}
        />
      </td>
    </tr>
  );
};

export default ProductDetails;
