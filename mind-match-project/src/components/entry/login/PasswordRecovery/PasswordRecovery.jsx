import React from "react";
import styles from "./PasswordRecovery.module.css";
import Header from "../../entryCommonComponents/Header/Header";
import { useForm } from "react-hook-form";
import Button from "../../entryCommonComponents/Button/Button";
import axios from "axios";

function PasswordRecovery() {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({ mode: "onChange" });
    const onSubmit = async (data) => {
        try {
            const response = await axios.post(
                "какой-то адрес",
                { email: data.email },
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.status === 200) {
                alert("Проверьте вашу почту для получения дальнейших инструкций.");
            } else {
                alert("Произошла ошибка при отправке запроса.");
            }
        } catch (e) {
            console.error("Ошибка при отправке данных на сервер:", e);
        }
    };

    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.mainText}>Password recovery</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.wrap_firstInput}>
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
                <Button type="submit" text="Send again" disabled={!isValid} />
            </form>
            <span className={styles.subText}>
                Please enter your email address so we can send you a password
                reset form.
            </span>
        </div>
    );
}

export default PasswordRecovery;
