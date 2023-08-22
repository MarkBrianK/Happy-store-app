import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TextRendering from "../Shared/TextRendering";
import SheetModal from "../Shared/SheetModal";
import { Rating } from "../../Icons/Rating";
import Button from "../Shared/Button";
import LoadingComponent from "../Shared/Loading";

export default function ProductComponent({ props }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product)
    return (
      <p>
        <LoadingComponent />
      </p>
    );

  return (
    <div className="container-fluid m-0 p-0">
      {/* Header */}
      <div className="row">
        <div className="col-12">
          <TextRendering className="card text-center">
            Product Details
          </TextRendering>
        </div>
      </div>

      {/* Product Image */}
      <div className="row justify-content-center align-items-center my-3">
        <div className="col-12 col-md-6 col-lg-4 text-center">
          <img
            src={product.image}
            className="card-img-top img-fluid"
            alt={product.title}
            style={{ objectFit: "fill", width: "80%" }}
          />
        </div>
      </div>

      {/* Sizes/Measurements */}
      <div className="row">
        <div className="col-12 text-center">
          <TextRendering>Sizes</TextRendering>
          {["41", "42", "43", "44"].map((size) => (
            <button
              key={size}
              type="button"
              className="btn btn-secondary p-2 m-1 bg-dark border border-3 border-info-emphasis rounded-5 rounded-top-0"
              disabled
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* SheetModal */}
      <SheetModal style={{ height: "75vh", width: "100%" }}>
        {/* Heading & Rating */}
        <div className="row justify-content-between mt-2 m-0 p-3">
          <div className="col-12 col-md-6">
            <TextRendering style={{ fontSize: "20px", marginBottom: "-8px" }}>
              {product.title}
            </TextRendering>
          </div>
          <div className="col-12 col-md-4 text-md-right mt-1">
            rating:
            <Rating />
            <span>{product.rating.count}</span>
          </div>
        </div>

        {/* Description of the item */}
        <div className="row">
          <div className="col-12">
            <TextRendering style={{ marginBottom: "-5px", fontSize: "20px" }}>
              Description
            </TextRendering>
            <p className="p-2">{product.description}</p>
          </div>
        </div>

        {/* Price and Add Payment Method */}
        <div className="row justify-content-between mt-2 m-0 p-3">
          <div className="col-12 col-md-4">
            <TextRendering style={{ fontWeight: "normal" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>$</span>{" "}
              {product.price}
            </TextRendering>
          </div>
          <div className="col-12 col-md-7">
            <Button style={{ width: "100%", whiteSpace: "nowrap" }}>
              Add payment
            </Button>
          </div>
        </div>
      </SheetModal>
    </div>
  );
}
