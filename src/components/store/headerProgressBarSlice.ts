import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface progressBarState {
    currentStep: number
    totalSteps: number
    processType: string
}

const initialState: progressBarState = { 
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
        setProcessType: (state, action: PayloadAction<{processType: string, totalSteps: number}>) => {
            const { processType, totalSteps } = action.payload;
            state.processType = processType;
            state.totalSteps = totalSteps;
            state.currentStep = 1;
        },
        resetProgressBar: () => initialState,
    },
});

export const { nextStep, prevStep, resetProgressBar, setProcessType } =
    progressBarSlice.actions;
export default progressBarSlice.reducer;
