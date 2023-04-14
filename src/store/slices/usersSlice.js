import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { deleteUser } from "../thunks/deleteUser";
import { updateUser } from "../thunks/updateUser";


const usersSlice = createSlice({
    name: "users",
    initialState:{
        data: [],
        isLoadind: false,
        error: null
    },
    reducers:{
        updateUserWithId: (state, action) => {
            state.data = state.data.map(item => {
                if(item.id === +action.payload.id){
                    return action.payload
                }
                return item
            })
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending,(state,action) => {
            state.isLoadind = true;
        });
        builder.addCase(fetchUsers.fulfilled,(state,action) => {
            state.isLoadind = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected,(state,action) => {
            state.isLoadind = false;
            state.error = action.error;
        });

        builder.addCase(addUser.pending,(state,action) => {
            state.isLoadind = true;
        });
        builder.addCase(addUser.fulfilled,(state,action) => {
            state.isLoadind = false;
            state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected,(state,action) => {
            state.error = action.error;
        });

        builder.addCase(deleteUser.pending,(state,action) => {
            state.isLoadind = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoadind = false;
            state.data = state.data.filter((user) => {
                return user.id !== action.payload.id;
            });
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isLoadind = false;
            state.error = action.error;
        });
        builder.addCase(updateUser.pending,(state,action) => {
            state.isLoadind = true;
        });
        builder.addCase(updateUser.fulfilled,(state,action) => {
            state.isLoadind = false;
            state.data = state.data.map((item) => {
                if(item.id === +action.payload.id){
                    return action.payload
                }
                return item
            
            })
            
        });
        builder.addCase(updateUser.rejected,(state,action) => {
            state.isLoadind = false;
            state.error = action.error;

        })
    },
});

export const usersReducer = usersSlice.reducer; 

export const  {updateUserWithId} = usersSlice.actions;