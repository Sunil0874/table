import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./usersSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
});


export * from "../thunks/fetchUsers";
export * from "../thunks/addUser";
export * from "../thunks/deleteUser";
export * from "../thunks/updateUser";
export * from "../thunks/showUser";