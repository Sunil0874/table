import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addUser = createAsyncThunk('user/add',async(user) => {
    const response = await axios.post("https://gorest.co.in/public/v2/users",user,{
        headers: {
            
            Authorization: "Bearer 2c7bb0413104bed9589bff11912716fca4bc8c421ea8f485a0f8262bc5cbf0d8"
        },
        
    });
    return response.data;

});

export { addUser };