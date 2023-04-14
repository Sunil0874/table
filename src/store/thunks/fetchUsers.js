import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 
const fetchUsers = createAsyncThunk('user/fetch',async() => {
    const response = await axios.get('https://gorest.co.in/public/v2/users');
    return response.data;
    
});


export {fetchUsers};