import axios from "axios";
import { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../../hook";
import { UseFormReset } from "react-hook-form";
import { FormValue } from "./InputFieldsVerificationCode/InputFieldsVerificationCode";

interface SendDataProps {
    setIsSubmitting: (action: boolean) => void
    startTimer: (duration: number) => void
    reset: UseFormReset<FormValue>
}

export default function useSendDataToServerVerifyCode({
    setIsSubmitting,
    startTimer,
    reset,
}: SendDataProps) {
    const location = useLocation(),
        queryParams = new URLSearchParams(location.search),
        context = queryParams.get("context"); // "registration" или "login"

    const email = useAppSelector((state) =>
        context === "registration"
            ? state.registrationData.email
            : state.loginData.email
    ),
    [dataSent, setDataSent] = useState(false)

    const sendDataToServer = useCallback(
        async (data: FormValue) => {
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
                    console.log("Код верификации принят! Ожидается переход на страницу пользователя.");
                    startTimer(60);
                    reset();
                    // Здесь будет переход к основному содержимому сайта
                }
            } catch (error) {
                console.log((`Ошибка отправки кода: ${error}`));
            } finally {
                setDataSent(false)
                setIsSubmitting(false);
            }
        },
        [email, reset, setIsSubmitting, startTimer]
    );
    return {sendDataToServer, dataSent};
}
