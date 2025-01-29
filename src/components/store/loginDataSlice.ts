import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState{
    email: string
}

const initialState: LoginState = {
    email: ""
},
    loginDataSlice = createSlice({
        name: "loginData",
        initialState,
        reducers: {
            setEmail(state, action: PayloadAction<string>) {
                state.email = action.payload;
            },
            resetLoginData: () => initialState,
        },
    })

export default loginDataSlice.reducer;
export const { setEmail, resetLoginData} = loginDataSlice.actions;