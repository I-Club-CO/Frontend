import axios from "axios";
import { useCallback } from "react";
import { resetLoginData } from "../../../../store/loginDataSlice";

export default function useSendDataToServerWelcomeBack() {

    const sendData = useCallback(async (data) => {
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
                alert("Вы успешно вошли");
                resetLoginData()
                // navigate("/profile");
            } else {
                alert("Неправильный email или пароль");
                return;
            }
        } catch (error) {
            console.error("Error: ", error);
            alert("Произошла ошибка при входе");
            return;
        }
    }, []);
    return sendData;
}
