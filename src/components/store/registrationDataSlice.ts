import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegistrationState {
    email: string
    password: string
    username: string
    birthday: string
    gender: string
    industry: string
    info: string
    category: string[]
    country: string
    city: string
    image1?: File | null
    phone: string
}

const initialState: RegistrationState = {
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
    image1: undefined,
    phone: "79008007545",
};

const registrationDataSlice = createSlice({
    name: "registrationData",
    initialState,
    reducers: {
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
        },
        setUsername(state, action: PayloadAction<string>) {
            state.username = action.payload;
        },
        setBirthday(state, action: PayloadAction<string>) {
            state.birthday = action.payload;
        },
        setGender(state, action: PayloadAction<string>) {
            state.gender = action.payload;
        },
        setIndustry(state, action: PayloadAction<string>) {
            state.industry = action.payload;
        },
        setInfo(state, action: PayloadAction<string>) {
            state.info = action.payload;
        },
        setCategory(state, action: PayloadAction<string[]>) {
            state.category = action.payload;
        },
        setCountry(state, action: PayloadAction<string>) {
            state.country = action.payload;
        },
        setCity(state, action: PayloadAction<string>) {
            state.city = action.payload;
        },
        setPhone(state, action: PayloadAction<string>) {
            state.phone = action.payload;
        },
        setPhoto(state, action: PayloadAction<File | null>) {
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
