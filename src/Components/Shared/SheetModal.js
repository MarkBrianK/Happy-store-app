import COLORS from "../../Constants/Colors";

export default function SheetModal({ children }) {
  const basicStyle = {
    borderTopLeftRadius: "45px",
    borderTopRightRadius: "45px",
    backgroundColor: COLORS.sheetModalBackground,
    display: "flex",
    justifyContent: "center",
    height: "100vh", // This will set the modal's height to 80% of the viewport height.
    overflow: 'hidden' // In case the content is more, this will allow scrolling.
  };

  return (
    <div style={basicStyle}>
      <div>{children}</div>
    </div>
  );
}
