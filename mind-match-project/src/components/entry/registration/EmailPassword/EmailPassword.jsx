import React from "react";
import styles from "./EmailPassword.module.css";
import { setEmail, setPassword } from "../../../store/registrationDataSlice";
import { useNavigate } from "react-router-dom";
import Header from "../../entryCommonComponents/Header/Header";
import Button from "../../entryCommonComponents/Button/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export default function EmailPassword() {
    const dispatch = useDispatch(),
        navigate = useNavigate();

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        watch,
        reset,
    } = useForm({
        mode: "onBlur",
    });

    const [password, repeatPassword] = watch(["password", "repeatPassword"]);

    const onSubmit = (data) => {
        dispatch(setEmail(data.email));
        dispatch(setPassword(data.password));
        reset();

        navigate("/registration-name-age-gender");
    };

    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.mainText}>Let's get started</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div
                    className={`${styles.wrap_input} ${styles.wrap_firstInput}`}
                >
                    <p className={styles.text}>Email:</p>
                    <input
                        className={styles.input}
                        {...register("email", {
                            required: "Email is required.",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email format.",
                            },
                        })}
                        type="text"
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
                    <p className={styles.text}>Create a password:</p>
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
                        placeholder="Create a password..."
                    />
                    <p className={styles.error_text}>
                        {errors.password ? (
                            <span>{errors.password.message}</span>
                        ) : (
                            ""
                        )}
                    </p>
                </div>
                <div className={styles.wrap_input}>
                    <p className={styles.text}>Repeat password:</p>
                    <input
                        className={styles.input}
                        {...register("repeatPassword", {
                            required: "Please repeat your password.",
                            validate: (value) => {
                                return (
                                    value === password ||
                                    "Passwords do not match."
                                );
                            },
                        })}
                        type="password"
                        placeholder="Repeat password...."
                    />
                    <p className={styles.error_text}>
                        {errors.repeatPassword ? (
                            <span>{errors.repeatPassword.message}</span>
                        ) : (
                            ""
                        )}
                    </p>
                </div>

                <Button type="submit" text={"Next"} disabled={!isValid} />
            </form>

            <span className={styles.subText}>
                The password must be 8 characters long, numbers and capital
                letters.
            </span>
        </div>
    );
}
