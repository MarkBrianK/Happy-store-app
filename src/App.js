import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./Constants/Routes";

import SignIn from "./Components/Screens/SignIn";
import SignupComponent from "./Components/Screens/SignUp";
import HomeComponent from "./Components/Screens/HomePage";
import ProductComponent from "./Components/Screens/ProductScreen";

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
      <div style={{ flex: 1, paddingTop: "20px" }}>
        <Routes>
          <Route path={ROUTES.home} element={<HomeComponent />} />
          <Route path={ROUTES.signUp} element={<SignupComponent />} />
          <Route path={ROUTES.signIn} element={<SignIn />} />
          <Route path={ROUTES.productScreen} element={<ProductComponent />} />
        </Routes>
      </div>
    </div>
  );
}
