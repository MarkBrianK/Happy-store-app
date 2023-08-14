import React from "react";
import TextRendering from "../Shared/TextRendering";
import Search from "../Shared/Search";
import BottomNav from "../Shared/BottomNav";
import Carousel from "../Shared/Carousel";

export default function HomeComponent() {
  return (
    <div>
      <div className="container text-center mb-3">
        <TextRendering>Discover</TextRendering>
      </div>
      <div>
        <Search />
      </div>
      <div className="mt-2 p-2 rounded h-20">
        <Carousel className="border border-dark-subtle"/>
      </div>
      <div>
        <BottomNav />
      </div>
    </div>
  );
}
