import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registrationDataReducer from "./registrationDataSlice";
import loginDataReducer from "./loginDataSlice";
import progressBarReducer from "./headerProgressBarSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    registrationData: registrationDataReducer,
    loginData: loginDataReducer,
    progressBar: progressBarReducer,
});

const persistConfig = {
    key: "root",
    storage,
};

const persisterReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persisterReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);

export default store;
