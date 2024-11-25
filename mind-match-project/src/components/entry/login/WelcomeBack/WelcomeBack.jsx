import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetLoginData, setPassword, setUsername } from "../../../store/loginDataSlice";
import axios from "axios";
import { useData } from "../../entryCommonComponents/useData";

function WelcomeBack() {
    const dispatch = useDispatch(),
        allLoginData = useSelector((state) => state.loginData);

    const [username, changeUsername] = useData((state) => state.loginData.username, setUsername),
        [password, changePassword] = useData((state) => state.loginData.password, setPassword);

    const navigate = useNavigate(),
        back = () => {
            navigate(-1);
        };

    const submitData = async () => {
        try{
            const response = await axios.post("https://vsp44.pythonanywhere.com/login/", allLoginData, {
                headers: {
                    "Content-Type": "application/json",
                }
            })

            if (response.status === 200) {
                alert("Вы успешно вошли");
                dispatch(resetLoginData())
            } else {
                alert("Неправильный email или пароль");
                return;
            }
        } catch(error){
            console.error("Error: ", error);
            alert("Произошла ошибка при входе");
            return;
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Введите username"
                onChange={changeUsername}
            />
            <input
                type="password"
                placeholder="Введите пароль"
                onChange={changePassword}
            />
            <button onClick={submitData}>Войти</button>
            <button>я забыл пароль</button>
            <button>next page</button>
            <button onClick={back}>previous page</button>
        </div>
    );
}

export default WelcomeBack;
