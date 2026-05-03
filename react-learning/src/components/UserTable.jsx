import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, updateUser } from "../features/users/userSlice";
import { selectPaginatedUsers } from "../features/users/userSelector";
import EditUserModal from "./EditUserModal";
import ConfirmModal from "./ConfirmModal";
import { FaPen,FaTrash} from "react-icons/fa";

const UserTable = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectPaginatedUsers);

  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditOpen(true);
  };

  const handleDelete = (user) => {
    setSelectedUser(user);
    setDeleteOpen(true);
  };

  return (
    <>
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>

            <td>
              <button
                className="btn-primary"
                onClick={() => handleEdit(user)}
              >
               <FaPen title="Edit"/>
              </button>
              <button
                className="btn-danger"
                onClick={() => handleDelete(user)}
              >
               <FaTrash title="delete"/>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
          <EditUserModal
        open={editOpen}
        user={selectedUser}
        onClose={() => setEditOpen(false)}
        onSave={(data) => {
          dispatch(updateUser({
            id: selectedUser.id,
            data
          }));
          setEditOpen(false);
        }}
      />

      <ConfirmModal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={() => {
          dispatch(deleteUser(selectedUser.id));
          setDeleteOpen(false);
        }}
      />
    </>
  );
}

export default UserTable;