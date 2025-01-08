
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
    resetLoginData,
    setPassword,
    setUsername,
} from "../../../store/loginDataSlice";
import axios from "axios";
import styles from "./WelcomeBack.module.css";
import Header from "../../entryCommonComponents/Header/Header";
import { useForm } from "react-hook-form";
import Button from "../../entryCommonComponents/Button/Button";
import { setEmail } from "../../../store/registrationDataSlice";

function WelcomeBack() {
    const dispatch = useDispatch(),
        navigate = useNavigate()
        // allLoginData = useSelector((state) => state.loginData);

    // const [password, setPassword] = useState("")


    const submitData = async (data) => {
        dispatch(setEmail(data.email))
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
                navigate("/registration-verification-code");
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
                    <p className={styles.text}>Email:</p>
                    <input
                        className={styles.input}
                        type="text"
                        {...register("email", {
                            required: "Email is required.",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email format.",
                            },
                        })}
                        placeholder="Email..."
                    />
                    <p className={styles.error_text}>
                        {errors.email ? (
                            <span>{errors.email.message}</span>
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
                <NavLink to="/login-password-recovery" className={styles.secondary_text}>I forgot my password</NavLink>
                <Button type="submit" text="Next" disabled={!isValid}/>
            </form>
        </div>
    );
}

export default WelcomeBack;
