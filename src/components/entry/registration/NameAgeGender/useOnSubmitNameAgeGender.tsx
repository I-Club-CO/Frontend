import { useNavigate } from "react-router-dom";
import { setBirthday, setGender, setUsername } from "../../../store/registrationDataSlice";
import { useAppDispatch } from "../../../../hook";
import { FormValues } from "./InputFieldsNameAgeGender/InputFieldsNameAgeGender";

export default function useOnSubmitNameAgeGender() {
    const dispatch = useAppDispatch(),
        navigate = useNavigate();
    return (data: FormValues): void => {
        dispatch(setUsername(data.username));
        dispatch(setBirthday(data.birthday));
        dispatch(setGender(data.gender));
        navigate("/registration-tell-about-yourself");
    }
}
