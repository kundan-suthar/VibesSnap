import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const authSlice = createSlice({
    name: "authData",
    initialState,
    reducers: {
        setAuth(state, action) {

            return action.payload;
        }
    }
})
export const authProfile = (state) => {
    return state.authData;
};
export const { setAuth } = authSlice.actions;

export default authSlice.reducer;