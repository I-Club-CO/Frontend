import axios from "axios";
import { useCallback } from "react";
import { useSelector } from "react-redux";

export default function useSendDataToServer(
    setIsSubmitting,
    setErrorMessage,
    startTimer,
    reset,
) {
    const email = useSelector((state) => state.registrationData.email);

    const sendData = useCallback(
        async (data) => {
            setIsSubmitting(true);
            setErrorMessage("");
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
                    // navigate("/profile");
                }
            } catch (error) {
                setErrorMessage("Неверный код верификации. Попробуйте снова.");
            } finally {
                setIsSubmitting(false);
            }
        },
        [email, reset, setErrorMessage, setIsSubmitting, startTimer]
    );
    return sendData;
}
