import React from "react";
import TextRendering from "../Shared/TextRendering";
import SheetModal from "../Shared/SheetModal";
import { Rating } from "../../Icons/Rating";
import Button from "../Shared/Button";

export default function ProductComponent() {
  return (
    <div class="container m-0 p-0" style={{ maxHeight: "100%",maxWidth:"100%", overflowY: "auto" }}>
      {/* Header */}
      <div>
        <TextRendering className="card text-center">
          Product Details
        </TextRendering>
      </div>
      {/* Product Image */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="card text-center" style={{ width: "10rem" }}>
          <img
            src="https://contents.mediadecathlon.com/p1733131/k$c064a61fd1627660aa0bbd803446e45f/men-s-uv-water-t-shirt-white.jpg?format=auto&quality=40&f=800x800"
            className="card-img-top bg-dark"
            alt="..."
          />
        </div>
      </div>
      {/* Sizes/Measurements */}
      <div className="card-body text-center">
        <TextRendering>Sizes</TextRendering>
        {/* Button Group */}
        {["41", "42", "43", "44"].map((size) => (
          <button
            type="button"
            className="btn btn-secondary p-2 m-1 bg-dark border border-3 border-info-emphasis rounded-5 rounded-top-0"
            disabled
          >
            {size}
          </button>
        ))}
      </div>

      {/* SheetModal */}
      <SheetModal style={{ height: "100%",width:"100%" }}>
        {/* Heading & Rating */}
        <div className="row justify-content-between mt-2 m-0 p-3">
          <div className="col-6">
            <TextRendering style={{ fontSize: "20px", marginBottom: "-8px" }}>
              Nike Blazer Mid 77
            </TextRendering>
          </div>
          <div className="col-4">
            <Rating />
            <span> 4.9</span>
          </div>
        </div>
        {/* Description of the item */}
        <div>
          <TextRendering style={{ marginBottom: "-5px", fontSize: "20px" }}>
            Description
          </TextRendering>
          <p className="p-2">
            A travel-based web application that provides details about various
            cities around the world, including tourist attractions, popular
            local cuisines, and cultural information. A travel-based web
            application that provides details about various cities around the
            world, including tourist attractions, popular local cuisines, and
            cultural information.
          </p>
        </div>
        {/* Price and Add Payment Method */}
        <div className="row justify-content-between mt-2 m-0 p-3">
          <div className="col-4">
            <TextRendering>
              Price<span style={{ fontSize: "14px" }}>Ksh:</span> 500
            </TextRendering>
          </div>
          <div className="col-7">
            <Button style={{ width: "100%", whiteSpace: "nowrap" }}>
              Add payment
            </Button>
          </div>
        </div>
      </SheetModal>
    </div>
  );
}
