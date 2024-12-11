import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null, // Store user info
    profile: null,     // Store additional profile data
    loading: false,    // Handle loading states if needed
    error: null,       // Store error states
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.currentUser = action.payload;
        },
        setProfile(state, action) {
            state.profile = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        clearUser(state) {
            state.currentUser = null;
            state.profile = null;
        },
    },
});


export const { setUser, setProfile, setLoading, setError, clearUser } = userSlice.actions;

export default userSlice.reducer;