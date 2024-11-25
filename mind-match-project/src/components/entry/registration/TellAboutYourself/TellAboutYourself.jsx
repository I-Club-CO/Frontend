import { useDispatch, useSelector } from "react-redux";
import { setActivity, setInfo } from "../../../store/registrationDataSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { useData } from "../../entryCommonComponents/useData";

export default function TellAboutYourself() {

    const [activity, changeActivity] = useData((state) => state.registrationData.activity, setActivity),
        [info, changeInfo] = useData((state) => state.registrationData.info, setInfo);
        
    const navigate = useNavigate(),
        back = () => {
            navigate(-1);
        };
    return (
        <div>
            <input type="text" onChange={changeActivity} />
            <textarea name="" id="" onChange={changeInfo}></textarea>
            <div>tags</div>
            <button onClick={back}>назад</button>
            <NavLink to="/registration-location">next page</NavLink>
        </div>
    );
}
