import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setEmail, setPassword } from "../../../store/registrationDataSlice";
import { useEncryptPassword } from "../../entryCommonComponents/usePasswordCipher";
export default function useOnSubmitEmailPassword(password) {
    const dispatch = useDispatch(),
        navigate = useNavigate(),
        encryptPassword = useEncryptPassword(password);
    return (data) => {
        dispatch(setEmail(data.email));
        dispatch(setPassword(encryptPassword));
        navigate("/registration-name-age-gender");
    };
}
