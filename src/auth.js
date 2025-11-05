import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            ...(JSON.parse(localStorage.getItem("user")) || {}),
            isLoggedIn: !!localStorage.getItem("token"),
        },
    },
    reducers: {
        logout: (state)=> {
            state.user = null;
            localStorage.removeItem("token");
        },
        login: (state) => {
            state.user = {
                ...(JSON.parse(localStorage.getItem("user")) || {}),
                isLoggedIn: !!localStorage.getItem("token"),
            };
        }
    }
})

export const { logout, login } = authSlice.actions;
export default authSlice.reducer;