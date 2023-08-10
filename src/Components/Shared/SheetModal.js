import COLORS from "../../Constants/Colors";

export default function SheetModal({ children, style }) {
  const combinedStyle = {
    borderTopLeftRadius: "35px",
    borderTopRightRadius: "35px",
    backgroundColor: COLORS.sheetModalBackground,
    marginTop: "120px",
    ...style, 
  };

  return (
    <div>
      <div
        className="modal fade show d-block opacity-60 h-80"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        style={combinedStyle}
      >
        <div className="modal-dialog">{children}</div>
      </div>
    </div>
  );
}
