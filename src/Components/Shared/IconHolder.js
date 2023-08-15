import React from "react"


function IconHolder({ children }) {
    return (

        <button style={{
            backgroundColor: "#f6f6f6", padding: "5px 10px",
            borderRadius: "30px",
            cursor: "pointer",
            width: "141px",
            height: "62px",
            border:"none",
        }}>
            {children}

        </button>
    )
}
export default IconHolder
