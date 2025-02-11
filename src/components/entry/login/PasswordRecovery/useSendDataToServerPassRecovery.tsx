import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetLoginData, setEmail } from "../../../store/loginDataSlice";
import axios from "axios";
import { FormValue } from "./PasswordRecovery";
import { useAppDispatch } from "../../../../hook";

export default function useSendDataToServerPassRecovery() {
    const dispatch = useAppDispatch(),
        navigate = useNavigate(),
        [dataSent, setDataSent] = useState<boolean>(false),
        [errorSend, setErrorSend] = useState<boolean>(false)

    const sendDataToServer = useCallback(
        async (data: FormValue, onSuccess: () => void) => {
            dispatch(setEmail(data.email));
            setDataSent(true);
            try {
                const response = await axios.post(
                    "https://vsp44.pythonanywhere.com/recovery/",
                    { email: data.email },
                    { headers: { "Content-Type": "application/json" } }
                );

                if (response.status === 200) {
                    onSuccess();
                    resetLoginData();
                    navigate("/verification-code?context=login");
                }
            } catch (e) {
                setErrorSend(true)
            } finally {
                setDataSent(false);
            }
        },
        [navigate, dispatch]
    );
    return { sendDataToServer, dataSent, errorSend, setErrorSend };
}
