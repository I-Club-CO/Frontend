import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    password: "",
    username: "",
    birthday: "",
    gender: "",
    industry: "",
    info: "",
    category: [],
    country: "",
    city: "",
    image1: null,
    phone: "79008007545",
};

const registrationDataSlice = createSlice({
    name: "registrationData",
    initialState,
    reducers: {
        setEmail(state, action) {
            state.email = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
        setUsername(state, action) {
            state.username = action.payload;
        },
        setBirthday(state, action) {
            state.birthday = action.payload;
        },
        setGender(state, action) {
            state.gender = action.payload;
        },
        setIndustry(state, action) {
            state.industry = action.payload;
        },
        setInfo(state, action) {
            state.info = action.payload;
        },
        setCategory(state, action) {
            state.category = action.payload;
        },
        setCountry(state, action) {
            state.country = action.payload;
        },
        setCity(state, action) {
            state.city = action.payload;
        },
        setPhone(state, action) {
            state.phone = action.payload;
        },
        setPhoto(state, action) {
            state.image1 = action.payload;
        },
        resetRegistrationData: () => initialState,
    },
});

export default registrationDataSlice.reducer;
export const {
    setEmail,
    setPassword,
    setUsername,
    setBirthday,
    setGender,
    setIndustry,
    setInfo,
    setCategory,
    setCountry,
    setCity,
    setPhoto,
    resetRegistrationData,
} = registrationDataSlice.actions;
