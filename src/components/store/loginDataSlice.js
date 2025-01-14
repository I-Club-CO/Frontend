import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
},
    loginDataSlice = createSlice({
        name: "loginData",
        initialState,
        reducers: {
            setEmail(state, action) {
                state.email = action.payload;
            },
            resetLoginData: () => initialState,
        },
    })

export default loginDataSlice.reducer;
export const { setEmail, resetLoginData} = loginDataSlice.actions;