import { createSlice } from "@reduxjs/toolkit";


const initialState = [

]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setItems(state, action) {
            return action.payload;
        },
    }
})

export const allPosts = state => state.posts;




export const { setItems } = postSlice.actions;
export default postSlice.reducer;