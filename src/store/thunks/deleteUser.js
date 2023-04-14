import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUser = createAsyncThunk("user/delete", async(user) => {
     await axios.delete(`https://gorest.co.in/public/v2/users/${user.id}`,{
        headers:{
            Authorization: "Bearer 2c7bb0413104bed9589bff11912716fca4bc8c421ea8f485a0f8262bc5cbf0d8"
        },
     });

    return user;
    

});


export {deleteUser};