const Toast = ({ message }) => {
    if (!message) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 20,
                right: 20,
                background: "#16a34a",
                color: "white",
                padding: "12px 18px",
                borderRadius: "8px"
            }}
        >
            {message}
        </div>
    );
}

export default Toast;