import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: !!localStorage.getItem("token"),
    },
    reducers: {
        logout: (state)=> {
            state.isLoggedIn = false;
            localStorage.removeItem("token");
        },
        login: (state) => {
            state.isLoggedIn = !!localStorage.getItem("token");
        }
    }
})

export const { logout, login } = authSlice.actions;
export default authSlice.reducer;