import React from "react";
import TextRendering from "./Components/Shared/TextRendering";
import SearchBar from "./Components/Shared/Search";

export default function App() {
  return (
    <div style={{ backgroundColor: "whitesmoke", height: "100vh" }}>
      <TextRendering>Happy-Store-App</TextRendering>
      <SearchBar/>
    </div>
  );
}
