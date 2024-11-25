// import axios from "axios";
// import { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// function VerificationCode() {
//     const email = useSelector((state) => state.registrationData.email);
//     const [confirmation_code, setConfirmationCode] = useState([
//         "",
//         "",
//         "",
//         "",
//         "",
//         "",
//     ]),
//         [timer, setTimer] = useState(60),
//         [isButtonDisabled, setButtonDisabled] = useState(true),
//         [isTimerAcivate, setTimerAcivate] = useState(false);
//     const inputRefs = useRef([]);

//     const handleInputChange = (index, value) => {
//         if (value.length > 1) return;

//         if (/^[0-9]$/.test(value)) {
//             const newCode = [...confirmation_code];
//             newCode[index] = value;
//             setConfirmationCode(newCode);

//             if (index < confirmation_code.length - 1 && value) {
//                 inputRefs.current[index + 1].focus();
//             }
//         }

//     };

//     const navigate = useNavigate(),
//         back = () => {
//             navigate(-1);
//         };

//     const submitVerificationCode = async () => {
//         try {
//             const response = await axios.post(
//                 "https://vsp44.pythonanywhere.com/confirmation/",
//                 {
//                     email: email,
//                     confirmation_code,
//                 },
//                 { headers: { "Content-Type": "application/json" } }
//             );

//             if (response.status === 200) {
//                 alert("Код верификации принят");
//             } else {
//                 alert("Неправильный код верификации");
//             }

//              if (!isTimerAcivate) {
//                 setTimerAcivate(true);
//                 setButtonDisabled(true);
//                 setTimer(60);
//             }
//         } catch (error) {
//             console.error(error);
//             alert("Ошибка при отправке кода верификации");
//         }
//     };

//     const handleKeyDown = (index, event) => {
//         if (event.key === "Backspace") {
//             const newCode = [...confirmation_code];

//             if (newCode[index] === "") {
//                 if (index > 0) {
//                     newCode[index - 1] = "";
//                     setConfirmationCode(newCode);
//                     inputRefs.current[index - 1].focus();
//                 }
//             } else {
//                 newCode[index] = "";
//                 setConfirmationCode(newCode);
//             }
//         }
//     };

//     useEffect(() => {
//         if (timer > 0) {
//             const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
//             return () => clearInterval(countdown);
//         } else {
//             setButtonDisabled(false);
//         }
//     }, [timer])

//     const handleResendCode = async () => {
//         setTimer(60);
//         setButtonDisabled(true);
//         // Логика отправки кода на сервер
//         alert("Код повторно отправлен");
//     }

//     return (
//         <div>
//             <h2>Verification Code</h2>
//             {confirmation_code.map((digit, index) => (
//                 <input
//                     key={index}
//                     type="text"
//                     maxLength="1"
//                     value={digit}
//                     onChange={(event) =>
//                         handleInputChange(index, event.target.value)
//                     }
//                     ref={(el) => (inputRefs.current[index] = el)}
//                     onKeyDown={(event) => handleKeyDown(index, event)}
//                 />
//             ))}
//             <button onClick={back}>Назад</button>
//             <button onClick={submitVerificationCode}>Отправить код</button>
//             <p>{timer} сек осталось до повторной отправки кода</p>
//             <button onClick={handleResendCode} disabled={isButtonDisabled}>отправить код повторно</button>
//         </div>
//     );
// }

// export default VerificationCode;

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function VerificationCode() {
    const email = useSelector((state) => state.registrationData.email);
    const [confirmation_code, setConfirmationCode] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
    ]);
    const [timer, setTimer] = useState(60);
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const [isTimerActive, setIsTimerActive] = useState(false);
    const inputRefs = useRef([]);

    const handleInputChange = (index, value) => {
        if (value.length > 1) return;

        if (/^[0-9]$/.test(value)) {
            const newCode = [...confirmation_code];
            newCode[index] = value;
            setConfirmationCode(newCode);

            if (index < confirmation_code.length - 1 && value) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
    };

    const submitVerificationCode = async () => {
        try {
            const response = await axios.post(
                "https://vsp44.pythonanywhere.com/confirmation/",
                {
                    email: email,
                    confirmation_code: confirmation_code.join(""),
                },
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.status === 200) {
                alert("Код верификации принят");
            } else {
                alert("Неправильный код верификации");
            }

            if (!isTimerActive) {
                setIsTimerActive(true);
                setButtonDisabled(true);
                setTimer(60);
            }
        } catch (error) {
            console.error(error);
            alert("Ошибка при отправке кода верификации");
        }
    };

    useEffect(() => {
        const newCode = confirmation_code.join("");
        if (newCode.length === 6) {
            submitVerificationCode();
        } 
    }, [confirmation_code])

    const handleKeyDown = (index, event) => {
        if (event.key === "Backspace") {
            const newCode = [...confirmation_code];

            if (newCode[index] === "") {
                if (index > 0) {
                    newCode[index - 1] = "";
                    setConfirmationCode(newCode);
                    inputRefs.current[index - 1].focus();
                }
            } else {
                newCode[index] = "";
                setConfirmationCode(newCode);
            }
        }
    };

    useEffect(() => {
        if (isTimerActive && timer > 0) {
            const countdown = setInterval(
                () => setTimer((prev) => prev - 1),
                1000
            );
            return () => clearInterval(countdown);
        } else if (timer === 0) {
            setButtonDisabled(false);
            setIsTimerActive(false); // Останавливаем таймер при достижении 0
        }
    }, [timer, isTimerActive]);

    const handleResendCode = async () => {
        setTimer(60);
        setButtonDisabled(true);
        setIsTimerActive(true);
        alert("Код повторно отправлен");
    };



    return (
        <div>
            <h2>Verification Code</h2>
            {confirmation_code.map((digit, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(event) =>
                        handleInputChange(index, event.target.value)
                    }
                    ref={(el) => (inputRefs.current[index] = el)}
                    onKeyDown={(event) => handleKeyDown(index, event)}
                />
            ))}
            <button onClick={back}>Назад</button>
            {/* <button onClick={submitVerificationCode}>Отправить код</button> */}
            <p>{timer} сек осталось до повторной отправки кода</p>
            <button onClick={handleResendCode} disabled={isButtonDisabled}>
                отправить код повторно
            </button>
        </div>
    );
}

export default VerificationCode;
