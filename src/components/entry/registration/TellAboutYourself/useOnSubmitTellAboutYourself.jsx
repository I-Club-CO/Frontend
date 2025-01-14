import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCategory, setIndustry, setInfo } from "../../../store/registrationDataSlice";

export default function useOnSubmitTellAboutYourself() {
    const dispatch = useDispatch(),
        navigate = useNavigate();
    return (data) => {
        dispatch(setIndustry(data.industry));
        dispatch(setInfo(data.info));
        dispatch(setCategory(data.category));
        navigate("/registration-location");
    };
}
