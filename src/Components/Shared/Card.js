import React, { useState } from "react";
import Button from "./Button";
import { HeartIcon } from "../../Icons/HeartIcon";
import { Rating } from "../../Icons/Rating";
import Styles from "../../Styles/card.module.css";

export default function CardComponent() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="container">
    <div
      className="card text-center d-flex justify-content-center align-items-center"
      style={{
        border: "1px solid",
        borderRadius: "25px",
        width: "100%",
        maxWidth: "14rem",
        padding: "0.5rem", 
      }}
    >
        <img
          src="https://contents.mediadecathlon.com/p1733131/k$c064a61fd1627660aa0bbd803446e45f/men-s-uv-water-t-shirt-white.jpg?format=auto&quality=40&f=800x800"
          className="card-img-top img-fluid"
          alt="..."
          style={{
            width: "60%",
            objectFit: "cover",
          }}
        />
        <div className="card-body">
          <div>
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>
              <span>Rating:</span>
              <Rating />
              <span style={{ color: "#ffd233", marginLeft: "5px" }}>4.7</span>
            </p>
          </div>
          <div className={Styles.descriptionContainer}>
            <p className={Styles.descriptionText}>
              React components to get full confidence...
            </p>
            <a href="/productPage" className={Styles.learnMoreLink}>
              Learn More
            </a>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div class="row"></div>
            <div>
              <p className="mb-2">
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "GRAY",
                  }}
                >
                  Ksh:
                </span>
                400
              </p>
            </div>
            <div>
              <Button>
                <a
                  href="/liked"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLiked(!isLiked);
                  }}
                  style={{
                    textDecoration: "none",
                    color: isLiked ? "red" : "gray",
                    marginRight: "10px",
                  }}
                >
                  <HeartIcon />
                </a>
                <a
                className="text-nowrap"
                  href="/addCart"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Add Cart
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
