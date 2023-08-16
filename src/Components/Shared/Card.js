import React, { useState } from "react";
import Button from "./Button";
import { HeartIcon } from "../../Icons/HeartIcon";
import { Rating } from "../../Icons/Rating";
import Styles from "../../Styles/card.module.css";

export default function CardComponent() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="col-12 col-sm-6 col-md-4 mb-3 text-center">
    <div class="card text-center" style={{ width: "16rem", }}>
        <div class="card-body">
          <h5 class="card-title fs-6">Item Name</h5>
          {/* image */}
          <img
            src="https://contents.mediadecathlon.com/p1733131/k$c064a61fd1627660aa0bbd803446e45f/men-s-uv-water-t-shirt-white.jpg?format=auto&quality=40&f=800x800"
            class="card-img-top"
            alt="..."
            style={{ width: "10rem", height: "6rem" }}
          />
          {/* description  */}
          <div className={Styles.descriptionContainer}>
            <p className={Styles.descriptionText}>
              React components to get full confidence...
              <a href="/productPage" className={Styles.learnMoreLink}>
                Learn More
              </a>
            </p>
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
            4.7
          </p>

          <div class="row justify-content-between">
            <div class="col-6 col-sm-6 mt-1">
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
            <div class="col-6 col-sm-6">
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
                  href="/addCart"
                  className="text-nowrap"
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
