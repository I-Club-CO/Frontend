import axios from "axios";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function useSendDataToServerVerifyCode({
    setIsSubmitting,
    startTimer,
    reset,
}) {
    const location = useLocation(),
        queryParams = new URLSearchParams(location.search),
        context = queryParams.get("context"); // "registration" или "login"

    const email = useSelector((state) =>
        context === "registration"
            ? state.registrationData.email
            : state.loginData.email
    ),
    [dataSent, setDataSent] = useState(false)

    const sendDataToServer = useCallback(
        async (data) => {
            setDataSent(true)
            setIsSubmitting(true);
            try {
                const response = await axios.post(
                    "https://vsp44.pythonanywhere.com/confirmation/",
                    {
                        email: email,
                        confirmation_code: Number(data.verify),
                    },
                    { headers: { "Content-Type": "application/json" } }
                );

                if (response.status === 200) {
                    console.log("Код верификации принят!");
                    startTimer(60);
                    reset();
                    // Здесь будет переход к основному содержимому сайта
                }
            } catch (error) {
                alert("Ошибка отправки кода", error);
            } finally {
                setDataSent(false)
                setIsSubmitting(false);
            }
        },
        [email, reset, setIsSubmitting, startTimer]
    );
    return {sendDataToServer, dataSent};
}
