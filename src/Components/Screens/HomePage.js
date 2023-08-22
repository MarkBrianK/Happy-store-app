import React, { useState, useEffect } from "react";
import TextRendering from "../Shared/TextRendering";
import Search from "../Shared/Search";
import BottomNav from "../Shared/BottomNav";
import Carousel from "../Shared/Carousel";
import Card from "../Shared/Card";
import Styles from "../../Styles/homePage.module.css";
import COLORS from "../../Constants/Colors";
import LoadingComponent from "../Shared/Loading";

export default function HomeComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, []);

  if (loading)
    return (
      <p>
        <LoadingComponent />
      </p>
    );
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className={Styles.header}>
        <div className="container text-center mb-3">
          <TextRendering>Discover</TextRendering>
        </div>
        <div>
          <Search />
        </div>
        <div className="mt-2 p-2 rounded h-20">
          <Carousel />
        </div>
      </div>
      <div class="container text-center m-2">
        <div class="row justify-content-between pr-2 text-nowrap">
          <div class="col-4">
            <TextRendering>New Trend</TextRendering>
          </div>
          <div class="col-4">
            <TextRendering style={{ color: COLORS.Yellowish, fontSize: "12" }}>
              View all
            </TextRendering>
          </div>
        </div>
      </div>

      <div className={Styles.scrollableContainer}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            {data.map((product) => (
              <div
                className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3 m-1"
                key={product.id}
              >
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={Styles.bottomNav}>
        <BottomNav />
      </div>
    </div>
  );
}
