import axios from "axios";
import { useCallback } from "react";
import { useSelector } from "react-redux";

export default function useSendDataToServerVerifyCode({
    setIsSubmitting,
    startTimer,
    reset,
}) {
    const email = useSelector((state) => state.loginData.email);

    const sendData = useCallback(
        async (data) => {
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
                    alert("Код верификации принят!");
                    startTimer(60);
                    reset();
                    // Здесь будет переход к основному содержимому сайта
                }
            } catch (error) {
                alert("Ошибка отправки кода", error)
            } finally {
                setIsSubmitting(false);
            }
        },
        [email, reset, setIsSubmitting, startTimer]
    );
    return sendData;
}
