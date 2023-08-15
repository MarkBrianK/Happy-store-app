import React from "react"
function Header({children}){

    return(
        <div style={{ display:"flex",justifyContent: "center", alignItems:"center"}}>
        {children}
        </div>
    )
}

export default Header
