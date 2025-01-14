import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, {persistor} from "./components/store/store";
import { PersistGate } from 'redux-persist/integration/react'
import Loader from "./components/common/Loader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter basename="/Frontend">
        <Provider store={store}>
            <PersistGate loading={<Loader/>} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </BrowserRouter>
);
