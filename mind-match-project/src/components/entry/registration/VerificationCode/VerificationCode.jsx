import React, { useEffect, useState } from "react";
import styles from "./VerificationCode.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../../entryCommonComponents/Header/Header";
import Button from "../../entryCommonComponents/Button/Button";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function VerificationCode() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = useSelector((state) => state.registrationData.email);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [timer, setTimer] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: "onBlur" });

    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const onSubmit = async (data) => {
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
                startTimer();
                reset()
                // navigate("/profile");
            }
        } catch (error) {
            setErrorMessage("Неверный код верификации. Попробуйте снова.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const startTimer = () => {
        setTimer(60);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const handleKewDown = (event) => {
        if (event.key === "Enter" && isValid) {
            event.preventDefault();
            console.log("Enter pressed");
            handleSubmit(onSubmit)()
        }
    }

    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.mainText}>Verification code</h1>
            <form onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKewDown}>
                <div
                    className={`${styles.wrap_input} ${styles.wrap_firstInput}`}
                >
                    <p className={styles.text}>Enter verification code:</p>
                    <input
                        className={styles.input}
                        {...register("verify", {
                            required: "Verification code is required.",
                            pattern: {
                                value: /^[0-9]{6}$/,
                                message: "Invalid verification code.",
                            },
                        })}
                        type="number"
                        placeholder="Verification code..."
                        disabled={timer > 0 || isSubmitting} // Блокировка ввода при активном таймере
                    />
                    <p className={styles.error_text}>
                        {errors.verify ? (
                            <span>{errors.verify.message}</span>
                        ) : (
                            errorMessage && <span>{errorMessage}</span>
                        )}
                    </p>
                </div>

                {timer > 0 && (
                    <p className={styles.subText}>
                        {formatTime(timer)} you can send the code again
                    </p>
                )}

                <Button
                    type="submit"
                    text="Next"
                    disabled={!isValid || isSubmitting || timer > 0} // Блокировка кнопки
                />
            </form>
        </div>
    );
}

export default VerificationCode;
// import axios from "axios";
// import { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import styles from "./VerificationCode.module.css";
// import Header from "../../entryCommonComponents/Header/Header";
// import { useForm } from "react-hook-form";
// import Button from "../../entryCommonComponents/Button/Button";

// function VerificationCode() {
//     const email = useSelector((state) => state.registrationData.email),
//         navigate = useNavigate();
//     const [timer, setTimer] = useState(60);
//     const [isButtonDisabled, setButtonDisabled] = useState(true);
//     const [isResendDisabled, setIsResendDisabled] = useState(true);
//     const [isTimerActive, setIsTimerActive] = useState(false);
//     const inputRefs = useRef([]);

//     const {
//         register,
//         handleSubmit,
//         setValue,
//         getValues,
//         watch,
//     } = useForm({
//         mode: "onChange",
//         defaultValues: {
//             code0: "",
//             code1: "",
//             code2: "",
//             code3: "",
//             code4: "",
//             code5: "",
//         },
//     });

//     const handleInputChange = (index, value) => {
//         if (value.length > 1) return; // Ограничиваем ввод до одной цифры

//         if (/^[0-9]$/.test(value)) {
//             setValue(`code${index}`, value); // Обновляем значение в react-hook-form

//             if (index < 5 && value) {
//                 inputRefs.current[index + 1].focus(); // Переходим к следующему полю
//             }
//         }

//         // Проверка, заполнены ли все поля
//         const allFieldsFilled = Object.values(getValues()).every(
//             (val) => /^[0-9]$/.test(val)
//         );
//         setButtonDisabled(!allFieldsFilled);
//     };

//     const handleKeyDown = (index, event) => {
//         if (event.key === "Backspace") {
//             if (getValues(`code${index}`) === "" && index > 0) {
//                 inputRefs.current[index - 1].focus(); // Возврат к предыдущему полю
//             }
//         }
//     };

//     const submitVerificationCode = async (data) => {
//         const code = Object.values(data).join(""); // Собираем код из 6 полей
//         try {
//             const response = await axios.post(
//                 "https://vsp44.pythonanywhere.com/confirmation/",
//                 {
//                     email: email,
//                     confirmation_code: code,
//                 },
//                 { headers: { "Content-Type": "application/json" } }
//             );

//             if (response.status === 200) {
//                 alert("Код верификации принят");
//                 navigate("/"); // Перенаправляем пользователя
//             } else {
//                 alert("Неправильный код верификации");
//             }
//         } catch (error) {
//             console.error(error);
//             alert("Ошибка при отправке кода верификации");
//         } finally {
//             // Запускаем таймер и блокируем кнопку "Resend code" после отправки
//             setTimer(60);
//             setIsTimerActive(true);
//             setIsResendDisabled(true);
//         }
//     };

//     useEffect(() => {
//         if (isTimerActive && timer > 0) {
//             const countdown = setInterval(
//                 () => setTimer((prev) => prev - 1),
//                 1000
//             );
//             return () => clearInterval(countdown);
//         } else if (timer === 0) {
//             setIsTimerActive(false);
//             setIsResendDisabled(false); // Активируем кнопку "Resend code" после завершения таймера
//         }
//     }, [timer, isTimerActive]);

//     const handleResendCode = async () => {
//         alert("Код повторно отправлен");
//         // Перезапуск таймера
//         setTimer(60);
//         setIsTimerActive(true);
//         setIsResendDisabled(true);
//     };

//     return (
//         <div className={styles.container}>
//             <Header />
//             <h1 className={styles.mainText}>Verification Code</h1>
//             <form onSubmit={handleSubmit(submitVerificationCode)}>
//                 <div className={styles.wrap_firstInput}>
//                     <p className={styles.text}>Enter verification code:</p>
//                     <div className={styles.verify_inputs}>
//                         {[...Array(6)].map((_, index) => (
//                             <div key={index} className={styles.input_wrapper}>
//                                 <input
//                                     className={styles.input}
//                                     {...register(`code${index}`, {
//                                         validate: (value) =>
//                                             /^[0-9]$/.test(value) ||
//                                             value === "",
//                                     })}
//                                     placeholder="0"
//                                     type="text"
//                                     maxLength="1"
//                                     value={watch(`code${index}`) || ""} // Гарантия, что значение всегда строка
//                                     onChange={(event) =>
//                                         handleInputChange(
//                                             index,
//                                             event.target.value
//                                         )
//                                     }
//                                     ref={(el) =>
//                                         (inputRefs.current[index] = el)
//                                     }
//                                     onKeyDown={(event) =>
//                                         handleKeyDown(index, event)
//                                     }
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <Button
//                     type="submit"
//                     text="Next"
//                     disabled={isButtonDisabled} // Кнопка активна только при заполнении всех полей
//                 />
//             </form>
//             <p className={styles.subText}>
//                 {timer > 0
//                     ? `${timer} seconds until you can resend the code`
//                     : "You can resend the code now"}
//             </p>
//             <button onClick={handleResendCode} disabled={isResendDisabled}>
//                 Отправить код повторно
//             </button>
//         </div>
//     );
// }

// export default VerificationCode;
