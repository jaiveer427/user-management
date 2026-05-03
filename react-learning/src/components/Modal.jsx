const overlay = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const modal = {
    background: "white",
    padding: "24px",
    borderRadius: "12px",
    width: "500px"
};
const Modal = ({ open, title, children, onClose }) => {
    if (!open) return null;

    return (
        <div style={overlay}>
            <div style={modal}>
                <div className="flex" style={{ justifyContent: "space-between" }}>
                    <h3>{title}</h3>
                    <button onClick={onClose}>X</button>
                </div>

                <div style={{ marginTop: "20px" }}>
                    {children}
                </div>
            </div>
        </div>
    );
}
export default Modal;