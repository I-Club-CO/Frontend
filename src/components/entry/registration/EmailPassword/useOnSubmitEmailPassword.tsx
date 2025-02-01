import { useNavigate } from "react-router-dom";
import { setEmail, setPassword } from "../../../store/registrationDataSlice";
import { encryptPassword } from "../../entryCommonComponents/passwordCipher";
import { useAppDispatch } from "../../../../hook";
import { FormValues } from "./InputFieldsEmailPassword/InputFieldsEmailPassword";
const useOnSubmitEmailPassword = (password: string) => {
    const dispatch = useAppDispatch(),
        navigate = useNavigate(),
        encryptingPassword = encryptPassword(password);
    return (data: FormValues): void => {
        dispatch(setEmail(data.email));
        dispatch(setPassword(encryptingPassword));
        navigate("/registration-name-age-gender");
    };
}
export default useOnSubmitEmailPassword