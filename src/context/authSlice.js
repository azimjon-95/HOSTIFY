import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: true,  // Initialize with token check
    // isAuthenticated: !!localStorage.getItem("access_token"),  // Initialize with token check
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
    },
});

export const { setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
