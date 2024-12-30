// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { resetLoginData, setPassword, setUsername } from "../../../store/loginDataSlice";
// import axios from "axios";
// // import { useData } from "../../entryCommonComponents/useData";

// function WelcomeBack() {
//     const dispatch = useDispatch(),
//         allLoginData = useSelector((state) => state.loginData);

//     // const [username, changeUsername] = useData((state) => state.loginData.username, setUsername),
//     //     [password, changePassword] = useData((state) => state.loginData.password, setPassword);

//     const navigate = useNavigate(),
//         back = () => {
//             navigate(-1);
//         };

//     const submitData = async () => {
//         try{
//             const response = await axios.post("https://chat.serveo.net/login/", allLoginData, {
//                 headers: {
//                     "Content-Type": "application/json",
//                 }
//             })

//             if (response.status === 200) {
//                 alert("Вы успешно вошли");
//                 dispatch(resetLoginData())
//             } else {
//                 alert("Неправильный email или пароль");
//                 return;
//             }
//         } catch(error){
//             console.error("Error: ", error);
//             alert("Произошла ошибка при входе");
//             return;
//         }
//     }

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Введите username"
//                 onChange={()}
//             />
//             <input
//                 type="password"
//                 placeholder="Введите пароль"
//             />
//             <button onClick={submitData}>Войти</button>
//             <button>я забыл пароль</button>
//             <button>next page</button>
//             <button onClick={back}>previous page</button>
//         </div>
//     );
// }

// export default WelcomeBack;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    resetLoginData,
    setPassword,
    setUsername,
} from "../../../store/loginDataSlice";
import axios, { all } from "axios";
import styles from "./WelcomeBack.module.css";
import Header from "../../entryCommonComponents/Header/Header";
import { useForm } from "react-hook-form";
import Button from "../../entryCommonComponents/Button/Button";

function WelcomeBack() {
    const dispatch = useDispatch(),
        navigate = useNavigate()
        // allLoginData = useSelector((state) => state.loginData);

    // const [password, setPassword] = useState("")


    const submitData = async (data) => {
        dispatch(setUsername(data.username));
        try {
            const response = await axios.post(
                "https://vsp44.pythonanywhere.com/login/",
                {
                    username: data.username,
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
                navigate("/");
                // dispatch(resetLoginData());
            } else {
                alert("Неправильный email или пароль");
                return;
            }
        } catch (error) {
            console.error("Error: ", error);
            alert("Произошла ошибка при входе");
            return;
        }
    };

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = (data) => {
        // setPassword(data.password)
        // dispatch(setUsername(data.username));
        submitData(data)
    };

    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.mainText}>Welcome back</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div
                    className={`${styles.wrap_input} ${styles.wrap_firstInput}`}
                >
                    <p className={styles.text}>Username:</p>
                    <input
                        className={styles.input}
                        type="text"
                        {...register("username", {
                            required: "Username is required.",
                            minLength: {
                                value: 3,
                                message:
                                    "Username must be at least 3 characters long.",
                            },
                            maxLength: {
                                value: 20,
                                message:
                                    "Username must not exceed 20 characters.",
                            },
                        })}
                        placeholder="Username..."
                    />
                    <p className={styles.error_text}>
                        {errors.username ? (
                            <span>{errors.username.message}</span>
                        ) : (
                            ""
                        )}
                    </p>
                </div>
                <div className={styles.wrap_input}>
                    <p className={styles.text}>Password:</p>
                    <input
                        className={styles.input}
                        {...register("password", {
                            required: "Password is required.",
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                                message:
                                    "The password must be 8 characters, at least one uppercase letter, one lowercase letter and one number.",
                            },
                        })}
                        type="password"
                        placeholder="Password..."
                    />
                    <p className={styles.error_text}>
                        {errors.password ? (
                            <span>{errors.password.message}</span>
                        ) : (
                            ""
                        )}
                    </p>
                </div>

                <p className={styles.secondary_text}>I forgot my password</p>

                <Button type="submit" text="Next" disabled={!isValid}/>
            </form>
        </div>
    );
}

export default WelcomeBack;
