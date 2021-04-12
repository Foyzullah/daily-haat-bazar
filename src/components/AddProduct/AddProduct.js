import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const [imageUrl, setImageUrl] = useState(null);

  const handleImageUpload = (e) => {
    const imageData = new FormData();
    imageData.set("key", "3b46d3fe0b0fe4e6c8b283625387a28a");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const onSubmit = (data) => {
    const formData = {
      productName: data.name,
      productWight: data.wight,
      productPrice: data.price,
      productImageUrl: imageUrl,
    };
    const url = `https://tranquil-citadel-18239.herokuapp.com/addProduct`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    reset();
  };

  return (
    <div className="add-product-form">
      <h2>Add product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="name">Product Name</label>
            <input {...register("name")} />
            <label htmlFor="price">Product Price</label>
            <input {...register("price")} />
          </div>
          <div className="col-md-6">
            <label htmlFor="wight">Product Wight</label>
            <input {...register("wight")} />
            <label htmlFor="image">Product Image</label>
            <input type="file" onChange={handleImageUpload} />
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
