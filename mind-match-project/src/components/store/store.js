import { configureStore } from "@reduxjs/toolkit";
import registrationDataReducer from "./registrationDataSlice";
import loginDataReducer from "./loginDataSlice";
import progressBarReducer from "./headerProgressBarSlice";
export default configureStore({
    reducer: {
        registrationData: registrationDataReducer,
        loginData: loginDataReducer,
        progressBar: progressBarReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
