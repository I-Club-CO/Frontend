import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetLoginData, setEmail } from "../../../store/loginDataSlice";
import axios from "axios";

export default function useSendDataToServerPassRecovery() {
    const dispatch = useDispatch(),
        navigate = useNavigate(),
        [dataSent, setDataSent] = useState(false),
        [errorSend, setErrorSend] = useState(false)

    const sendDataToServer = useCallback(
        async (data, onSuccess) => {
            dispatch(setEmail(data.email));
            setDataSent(true);
            try {
                const response = await axios.post(
                    "https://vsp44.pythonanywhere.com/recovery/",
                    { email: data.email },
                    { headers: { "Content-Type": "application/json" } }
                );

                if (response.status === 200) {
                    console.log(
                        "Email принят.\nПроверьте вашу почту для получения дальнейших инструкций."
                    );
                    onSuccess();
                    resetLoginData();
                    navigate("/verification-code?context=login");
                } else {
                    alert("Произошла ошибка при отправке запроса.");
                }
            } catch (e) {
                setErrorSend(true)
            } finally {
                setDataSent(false);
            }
        },
        [navigate, dispatch]
    );
    return { sendDataToServer, dataSent, errorSend };
}
