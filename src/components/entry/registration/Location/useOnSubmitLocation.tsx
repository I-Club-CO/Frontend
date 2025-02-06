import { useNavigate } from "react-router-dom";
import { setCity, setCountry } from "../../../store/registrationDataSlice";
import { useAppDispatch } from "../../../../hook";
import { FormValues } from "./InputFieldsLocation/InputFieldsLocation";

export default function useOnSubmitLocation () {
    const dispatch = useAppDispatch(),
        navigate = useNavigate();

    return (data: FormValues) => {
        dispatch(setCity(data.city));
        dispatch(setCountry(data.country));
        navigate("/registration-photo");
    }
};
