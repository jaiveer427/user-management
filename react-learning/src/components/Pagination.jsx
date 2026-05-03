import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../features/users/userSlice";
import { selectFilteredUsers } from "../features/users/userSelector";

const Pagination = () => {
    const dispatch = useDispatch();

    const users = useSelector(selectFilteredUsers);
    console.log(users);

    const { pageSize, currentPage } =
        useSelector(state => state.users);

    const totalPages =
        Math.ceil(users.length / pageSize);

    return (
        <div style={{display:"flex",justifyContent:"center",gap:"4px"}}>
            {[...Array(totalPages)].map((_, i) => (
                <button 
                    key={i}
                    disabled={currentPage === i + 1}
                    onClick={() =>
                        dispatch(setCurrentPage(i + 1))
                    }
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
}

export default Pagination;