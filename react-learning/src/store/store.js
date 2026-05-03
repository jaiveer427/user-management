import { configureStore } from "@reduxjs/toolkit";
//import counterReducer from "./counterSlice";
import userReducer  from "../features/users/userSlice";

export const store = configureStore({
    reducer: {
       users: userReducer
    }

});
store.subscribe(() => console.log(store.getState()))