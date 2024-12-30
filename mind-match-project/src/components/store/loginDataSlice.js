import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
},
    loginDataSlice = createSlice({
        name: "loginData",
        initialState,
        reducers: {
            setUsername(state, action) {
                state.username = action.payload;
            },
            resetLoginData: () => initialState,
        },
    })

export default loginDataSlice.reducer;
export const { setUsername, resetLoginData} = loginDataSlice.actions;