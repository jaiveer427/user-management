import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../features/users/userSlice";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setSearch(value));
        }, 1000);

        return () => clearTimeout(timer);
    }, [value]);

    console.log("Rendering search bar");
    return (
        <input
            placeholder="Search users..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}

export default SearchBar;