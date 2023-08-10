function Button({ children }) {
    return (
      <div
        style={{
          backgroundColor: "#FFBD5A",
          padding: "10px 20px",
          borderRadius: "16px",
          cursor: "pointer",
        }}
      >
        {children}
      </div>
    );
  }

  export default Button;
