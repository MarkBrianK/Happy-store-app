import React from "react";

function Button({ children, style }) {
  return (
    <div
      style={{
        width:"100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFBD5A",
        padding: "5px 10px",
        borderRadius: "30px",
        cursor: "pointer",
        ...style
      }}
    >
      {children}
    </div>
  );
}


export default Button;
