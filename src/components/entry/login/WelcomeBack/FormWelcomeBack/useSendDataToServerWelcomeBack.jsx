import axios from "axios";
import { useCallback, useState } from "react";
import { resetLoginData } from "../../../../store/loginDataSlice";

export default function useSendDataToServerWelcomeBack() {
    const [dataSent, setDataSent] = useState(false),
        [errorDataSend, setErrorDataSend] = useState(false)

    const sendData = useCallback(async (data, onSuccess) => {
        setDataSent(true);
        try {
            const response = await axios.post(
                "https://vsp44.pythonanywhere.com/login/",
                {
                    email: data.email,
                    password: data.password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 200) {
                console.log("Вы успешно вошли");
                onSuccess();
                resetLoginData();
                // navigate("/profile");
            }
        } catch (error) {
            setErrorDataSend(true)
            if (process.env.NODE_ENV === "development") {
                console.error("Ошибка авторизации:", error);
            }
        } finally {
            setDataSent(false);
        }
    }, []);
    return { sendData, dataSent, errorDataSend };
}
