import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    password: "",
},
    loginDataSlice = createSlice({
        name: "loginData",
        initialState,
        reducers: {
            setUsername(state, action) {
                state.username = action.payload;
            },
            setPassword(state, action) {
                state.password = action.payload;
            },
            resetLoginData: () => initialState,
        },
    })

export default loginDataSlice.reducer;
export const { setUsername, setPassword, resetLoginData} = loginDataSlice.actions;