import React from "react";
// import SearchBar from "./Components/Shared/Search";
// import BottomNav from "./Components/Shared/BottomNav";
import Footer from "./Components/Screens/Footer";
// import SignupComponent from "./Components/Screens/SignUp";
import HomePage from "./Components/Screens/HomePage"

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
        <HomePage/>
        {/* <SignupComponent /> */}
        {/* <SearchBar /> */}
        {/* <BottomNav /> */}
      </div>
      <Footer />
    </div>
  );
}
