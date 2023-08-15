function IconHolder({ children }) {
    return (

        <div style={{
            backgroundColor: "#f6f6f6", padding: "5px 10px",
            borderRadius: "30px",
            cursor: "pointer",
            width: "141px",
            height: "62px"
        }}>
            {children}

        </div>
    )
}
export default IconHolder
