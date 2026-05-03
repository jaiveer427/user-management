import { useDispatch } from "react-redux";
import { setRoleFilter } from "../features/users/userSlice";

const FilterBar = () => {
    const dispatch = useDispatch();

    return (
        <select
            onChange={(e) =>
                dispatch(setRoleFilter(e.target.value))
            }
        >
            <option>All</option>
            <option>Admin</option>
            <option>User</option>
            <option>Manager</option>
        </select>
    );
}

export default FilterBar;