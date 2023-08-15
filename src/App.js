import React from "react";
import SignIn from "./Components/Screens/SignIn";
// import SearchBar from "./Components/Shared/Search";
// import BottomNav from "./Components/Shared/BottomNav";
// import Footer from "./Components/Screens/Footer";
import SignupComponent from "./Components/Screens/SignUp";
// import HomeComponent from "./Components/Screens/HomePage";
// import Carousel from "./Components/Shared/Carousel";
// import ProductComponent from "./Components/Screens/ProductScreen";

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: 1, paddingTop: "40px" }}>
        <SignupComponent />
        {/* <SearchBar /> */}
        {/* <BottomNav /> */}
        {/* <HomeComponent /> */}
        {/* <ProductComponent /> */}
        {/* <Carousel/> */}
        <SignIn />
      </div>
      {/* <Footer /> */}
    </div>
  );
}
