import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsersAPI, addUserAPI, updateUserAPI, deleteUserAPI } from "./userapi";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const res = await fetchUsersAPI();
        return res.data;
    }
);

export const addUser = createAsyncThunk(
    "users/addUser",
    async (user) => {
        const res = await addUserAPI(user);
        return res.data;
    }
);

export const deleteUser = createAsyncThunk(
    "users/deleteUser",
    async (id) => {
        await deleteUserAPI(id);
        return id;
    }
);

export const updateUser = createAsyncThunk(
    "users/updateUser",
    async ({ id, data }) => {
        await updateUserAPI(id, data);
        return { id, data };
    }
);

const userSlice = createSlice({
    name: "users",
    initialState: {
        list: [],
        loading: false,
        error: null,
        search: "",
        roleFilter: "All",
        currentPage: 1,
        pageSize: 10
    },

    reducers: {
        setSearch(state, action) {
            state.search = action.payload;
            state.currentPage = 1;
        },

        setRoleFilter(state, action) {
            state.roleFilter = action.payload;
            state.currentPage = 1;
        },

        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder

            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })

            .addCase(fetchUsers.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to fetch";
            })

            .addCase(addUser.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })

            .addCase(deleteUser.fulfilled, (state, action) => {
                state.list = state.list.filter(
                    user => user.id !== action.payload
                );
            })

            .addCase(updateUser.fulfilled, (state, action) => {
                const index = state.list.findIndex(
                    user => user.id == action.payload.id
                );

                state.list[index] = {
                    ...state.list[index],
                    ...action.payload.data
                };
            });
    }
});
export const { setSearch, setRoleFilter, setCurrentPage } = userSlice.actions;
export default userSlice.reducer;