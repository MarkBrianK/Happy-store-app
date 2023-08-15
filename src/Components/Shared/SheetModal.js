import COLORS from "../../Constants/Colors";

export default function SheetModal({ children, style }) {
  const defaultStyle = {
    borderTopLeftRadius: "45px",
    borderTopRightRadius: "45px",
    backgroundColor: COLORS.sheetModalBackground,
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    overflow: 'hidden'
  };

  const mergedStyles = { ...defaultStyle, ...style };

  return (
    <div style={mergedStyles}>
      <div>{children}</div>
    </div>
  );
}
