import { Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./components/entry/Welcome/Welcome";
import EmailPassword from "./components/entry/registration/EmailPassword/EmailPassword";
import NameAgeGender from "./components/entry/registration/NameAgeGender/NameAgeGender";
import TellAboutYourself from "./components/entry/registration/TellAboutYourself/TellAboutYourself";
import Location from "./components/entry/registration/Location/Location";
import Photo from "./components/entry/registration/Photo/Photo";
import VerificationCode from "./components/entry/registration/VerificationCode/VerificationCode";
import WelcomeBack from "./components/entry/login/WelcomeBack/WelcomeBack";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route
                path="/registration-email-password"
                element={<EmailPassword />}
            />
            <Route
                path="/registration-name-age-gender"
                element={<NameAgeGender />}
            />
            <Route
                path="/registration-tell-about-yourself"
                element={<TellAboutYourself />}
            />
            <Route path="/registration-location" element={<Location />} />
            <Route path="/registration-photo" element={<Photo />} />
            <Route
                path="/registration-verification-code"
                element={<VerificationCode />}
            />
            <Route path="/login-email-password" element={<WelcomeBack />} />
        </Routes>
    );
}

export default App;
