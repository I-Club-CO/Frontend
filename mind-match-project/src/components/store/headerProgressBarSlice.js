import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentStep: 1,
    totalSteps: 6,
}

const progressBarSlice = createSlice({
    name: "progressBar",
    initialState,
    reducers: {
        nextStep: (state) => {
            if (state.currentStep < state.totalSteps) {
                state.currentStep += 1;
            }
        },
        prevStep: (state) => {
            if (state.currentStep > 1) {
                state.currentStep -= 1;
            }
        },
        resetProgressBar: () => initialState,
    },
})

export const { nextStep, prevStep, resetProgressBar } = progressBarSlice.actions;
export default progressBarSlice.reducer;