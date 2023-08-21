import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { HeartIcon } from "../../Icons/HeartIcon";
import { Rating } from "../../Icons/Rating";
import Styles from "../../Styles/card.module.css";

export default function CardComponent({ product }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="col-12 col-sm-6 col-md-4 mb-3 text-center">
      <div class="card text-center" style={{ width: "16rem" }}>
        <div class="card-body">
          <h5 class={`card-title fs-6 ${Styles.titleText}`}>{product.title}</h5>
          {/* image */}
          <img
            src={product.image}
            class="card-img-top"
            alt="..."
            style={{ width: "10rem", height: "6rem", objectFit: "fill" }}
          />
          {/* description  */}
          <div className={Styles.descriptionContainer}>
            <p className={Styles.descriptionText}>{product.description}</p>

            <Link to={`/product/${product.id}`} className={Styles.learnMoreLink}>Learn More</Link>

          </div>

          {/* card rating */}
          <p
            class="text-start"
            style={{
              fontSize: "20px",
              marginTop: "15px",
              color: "#ffd233",
            }}
          >
            <span style={{ fontWeight: "bold", color: "black" }}>Rating:</span>
            <Rating />
            {product.rating.count}
            
          </p>

          <div class="row justify-content-between">
            <div class="col-6 col-sm-6 mt-1">
              <p className="mb-2">
                <span
                  style={{
                    paddingRight: "8px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "GRAY",
                  }}
                >
                  $
                </span>
                {product.price}
              </p>
            </div>
            <div class="col-6 col-sm-6">
              <Button>
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  style={{
                    background: "transparent",
                    border: "none",
                    textDecoration: "none",
                    color: isLiked ? "red" : "gray",
                    marginRight: "10px",
                    cursor: "pointer",
                    padding: 0,
                    outline: "none",
                  }}
                >
                  <HeartIcon />
                </button>

                <Link
                  to={`/addCart/${product.id}`}
                  className="text-nowrap"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Add Cart
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
