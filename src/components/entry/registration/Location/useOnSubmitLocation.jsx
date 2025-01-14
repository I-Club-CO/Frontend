import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCity, setCountry } from "../../../store/registrationDataSlice";

export default function useOnSubmitLocation () {
    const dispatch = useDispatch(),
        navigate = useNavigate();

    return (data) => {
        dispatch(setCity(data.city));
        dispatch(setCountry(data.country));
        navigate("/registration-photo");
    }
};
