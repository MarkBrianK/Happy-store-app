import React from "react";
import SearchBar from "./Components/Shared/Search";
import BottomNav from "./Components/Shared/BottomNav";


export default function App() {
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        height: "100vh",
        paddingTop: "40px",
      }}
    >
      <SearchBar />
      
      <BottomNav />

    </div>
  );
}
