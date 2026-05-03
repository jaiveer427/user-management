import Modal from "./Modal";

const ConfirmModal = ({
    open,
    onClose,
    onConfirm
}) => {
    return (
        <Modal
            open={open}
            title="Confirm Delete"
            onClose={onClose}
        >
            <p>Are you sure?</p>

            <div className="flex" style={{ marginTop: "20px" }}>
                <button
                    className="btn-danger"
                    onClick={onConfirm}
                >
                    Delete
                </button>

                <button
                    className="btn-secondary"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </Modal>
    );
}

export default ConfirmModal;