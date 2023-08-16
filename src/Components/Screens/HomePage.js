import React from "react";
import TextRendering from "../Shared/TextRendering";
import Search from "../Shared/Search";
import BottomNav from "../Shared/BottomNav";
import Carousel from "../Shared/Carousel";
import Card from "../Shared/Card";
import Styles from "../../Styles/homePage.module.css";
import COLORS from "../../Constants/Colors";

export default function HomeComponent() {
  const times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
          <div className="row">
            {times.map((time) => (
              <div className="col-6-md-4 col-sm-6 mb-3" key={time}>
                <Card />
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
