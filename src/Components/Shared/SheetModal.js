import COLORS from "../../Constants/Colors";
export default function SheetModal({ children }) {
  return (
    <div>
      <div
        className="modal fade show d-block opacity-60 h-80 "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        style={{
          marginTop: "120px",
          borderTopLeftRadius: "35px",
          borderTopRightRadius: "35px",
          backgroundColor: COLORS.sheetModalBackground,
        }}
      >
        <div className="modal-dialog">{children}</div>
      </div>
    </div>
  );
}
