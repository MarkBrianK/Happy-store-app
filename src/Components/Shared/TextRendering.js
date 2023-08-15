import COLORS from "../../Constants/Colors";

export default function TextRendering({ children, style }) {
  return (
    <div
      style={{
        color: COLORS.blackColor,
        fontSize: 25,
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
