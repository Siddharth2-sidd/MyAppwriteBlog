import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        authlogin:(state, action) =>{
            state.status = true;
            state.userData = action.payload.userData;
        },
        authlogout:(state, action) =>{
            state.status = false;
            state.userData = null;
        }
    }
})

export const {authlogin, authlogout} = authSlice.actions;
export default authSlice.reducer;