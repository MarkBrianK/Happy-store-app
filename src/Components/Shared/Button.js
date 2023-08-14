function Button({ children,style }) {
  return (
    <div
      style={{
        backgroundColor: "#FFBD5A",
        padding: "10px 20px",
        borderRadius: "16px",
        cursor: "pointer",
        ...style
      }}
    >
      {children}
    </div>
  );
}

export default Button;
