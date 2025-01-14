import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setEmail, setPassword } from "../../../store/registrationDataSlice";
import { encryptPassword } from "../../entryCommonComponents/passwordCipher";
export default function useOnSubmitEmailPassword(password) {
    const dispatch = useDispatch(),
        navigate = useNavigate(),
        encryptingPassword = encryptPassword(password);
    return (data) => {
        dispatch(setEmail(data.email));
        dispatch(setPassword(encryptingPassword));
        navigate("/registration-name-age-gender");
    };
}
