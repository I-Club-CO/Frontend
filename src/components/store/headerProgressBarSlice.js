import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentStep: 1,
    totalSteps: 6,
    processType: "registration"
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
        setProcessType: (state, action) => {
            const {processType, totalSteps} = action.payload
            state.processType = processType;
            state.totalSteps = totalSteps;
            state.currentStep = 1;
        },
        resetProgressBar: () => initialState,
    },
})

export const { nextStep, prevStep, resetProgressBar, setProcessType } = progressBarSlice.actions;
export default progressBarSlice.reducer;