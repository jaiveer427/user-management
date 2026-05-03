import Modal from "./Modal";
import UserForm from "./UserForm";

const EditUserModal=({
  open,
  user,
  onClose,
  onSave
})=> {
  return (
    <Modal
      open={open}
      title="Edit User"
      onClose={onClose}
    >
      <UserForm
        initialData={user}
        onSubmit={onSave}
      />
    </Modal>
  );
}

export default EditUserModal;