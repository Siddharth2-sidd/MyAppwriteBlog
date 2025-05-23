import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";

const store = configureStore({
    reducer:{
        auth: authSlice,
        //TodO: add more slice here for posts
    }
})

export default store;