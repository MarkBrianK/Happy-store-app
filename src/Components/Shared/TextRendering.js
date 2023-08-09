import COLORS from "../../Constants/Colors";

export default function TextRendering({ children }) {
  return (
    <div style={{ color: COLORS.blackColor, fontSize: 25, fontWeight: "bold" }}>
      {children}
    </div>
  );
}
