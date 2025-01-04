import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBirthday, setGender, setUsername } from "../../../store/registrationDataSlice";

export default function useOnSubmitNameAgeGender() {
    const dispatch = useDispatch(),
        navigate = useNavigate();
    return (data) => {
        dispatch(setUsername(data.username));
        dispatch(setBirthday(data.birthday));
        dispatch(setGender(data.gender));
        navigate("/registration-tell-about-yourself");
    }
}
