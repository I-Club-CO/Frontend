import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setCity, setCountry } from "../../../store/registrationDataSlice";
import { useData } from "../../entryCommonComponents/useData";

function Location() {

    const [country, changeCountry] = useData((state) => state.registrationData.country, setCountry),
        [city, changeCity] = useData((state) => state.registrationData.city, setCity);

    const navigate = useNavigate(),
        back = () => {
            navigate(-1);
        };
    return (
        <div>
            <input
                type="text"
                placeholder="Country..."
                onChange={changeCountry}
            />
            <input type="text" placeholder="City..." onChange={changeCity} />
            <button onClick={back}>назад</button>
            <NavLink to="/registration-photo">next page</NavLink>
        </div>
    );
}

export default Location;
