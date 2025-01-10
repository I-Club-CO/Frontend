import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetLoginData, setEmail } from "../../../store/loginDataSlice";
import axios from "axios";

export default function useSendDataToServerPassRecovery() {

    const dispatch = useDispatch(),
        navigate = useNavigate()

    const onSubmit = useCallback( async (data) => {
        dispatch(setEmail(data.email));
        try {
            const response = await axios.post(
                "https://vsp44.pythonanywhere.com/recovery/",
                { email: data.email },
                { headers: { "Content-Type": "application/json" } }
            );
    
            if (response.status === 200) {
                alert("Email принят.\nПроверьте вашу почту для получения дальнейших инструкций.");
                resetLoginData()
                navigate("/verification-code?context=login");
            } else {
                alert("Произошла ошибка при отправке запроса.");
            }
        } catch (e) {
            console.error("Ошибка при отправке данных на сервер:", e);
        }
    }, [navigate, dispatch])
    return onSubmit
}