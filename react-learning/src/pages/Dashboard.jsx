import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers, addUser } from "../features/users/userSlice";

import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import UserTable from "../components/UserTable";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import Toast from "../components/Toast";
import UserForm from "../components/UserForm";
import ThemeToggle from "../components/ThemeToggle";
import SkeletonTable from "../components/SkeletonTable";


const Dashboard = () => {
  const dispatch = useDispatch();
  const [dark, setDark] = useState(false);
  const [toast, setToast] = useState("");

  const { loading } = useSelector(
    state => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleAdd = (data) => {
    dispatch(addUser(data));
    setToast("User Added Successfully");
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <div className={dark ? "dark container" : "container"}>

      <div className="flex">
        <h1>User Management</h1>
        <ThemeToggle dark={dark} setDark={setDark} />
      </div>

      <Toast message={toast} />



      <UserForm onSubmit={handleAdd} />

      <div className="card">
        <div className="flex">
          <SearchBar />
          <FilterBar />
        </div>
      </div>

      {loading ? (
        <SkeletonTable />
      ) : (
        <>
          <div className="card">
            <UserTable />
          </div>

          <Pagination />
        </>
      )}
    </div>
  );
}

export default Dashboard;

