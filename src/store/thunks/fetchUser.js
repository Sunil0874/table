import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUser = createAsyncThunk('singleuser/fetch', async (id) => {
    const response = await axios.get(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: {
            Authorization: "Bearer 2c7bb0413104bed9589bff11912716fca4bc8c421ea8f485a0f8262bc5cbf0d8"
        },
    });


    return response.data;

});


export { fetchUser };