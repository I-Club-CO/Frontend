import { useNavigate } from "react-router-dom";
import styles from "./NameAgeGender.module.css";
import {
    setBirthday,
    setGender,
    setUsername,
} from "../../../store/registrationDataSlice";
import Header from "../../entryCommonComponents/Header/Header";
import male from "../../../../assets/images/male.svg";
import female from "../../../../assets/images/female.svg";
import Button from "../../entryCommonComponents/Button/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function NameAgeGender() {
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
        }),
        onSubmit = (data) => {
            dispatch(setUsername(data.username));
            dispatch(setBirthday(data.birthday));
            dispatch(setGender(data.gender));
            reset();
            navigate("/registration-tell-about-yourself");
        };

    const gender = watch("gender"),
        isFormValid = isValid && gender;

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Enter" && isFormValid) {
                event.preventDefault();
                handleSubmit(onSubmit)();
            }
        };

        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [isFormValid, handleSubmit, onSubmit]);

    return (
        <div className={styles.container}>
            <Header />

            <h1 className={styles.mainText}>What's your name</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div
                    className={`${styles.wrap_input} ${styles.wrap_firstInput}`}
                >
                    <p className={styles.text}>Username:</p>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Username..."
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
                    <p className={styles.text}>Age:</p>
                    <input
                        type="number"
                        className={styles.input}
                        placeholder="Age..."
                        {...register("age", {
                            required: "Age is required.",
                            min: {
                                value: 14,
                                message: "You must be at least 14 years old.",
                            },
                            max: {
                                value: 99,
                                message: "You must be less than 100 years old.",
                            },
                        })}
                    />
                    <p className={styles.error_text}>
                        {errors.age ? <span>{errors.age.message}</span> : ""}
                    </p>
                </div>

                <div className={styles.buttons_container}>
                    <h2 className={styles.buttons_mainText}>Gender:</h2>
                    <div className={styles.buttons}>
                        <label
                            className={`${styles.radio_button} ${
                                gender === "male" ? styles.button_active : ""
                            }`}
                        >
                            <input
                                {...register("gender")}
                                className={styles.radio_input}
                                type="radio"
                                value="male"
                            />
                            <img src={male} className={styles.button_img} />
                        </label>
                        <label
                            className={`${styles.radio_button} ${
                                gender === "female" ? styles.button_active : ""
                            }`}
                        >
                            <input
                                {...register("gender")}
                                className={styles.radio_input}
                                type="radio"
                                value="female"
                            />
                            <img
                                src={female}
                                className={`${styles.button_img} ${styles.button_img_female}`}
                            />
                        </label>
                    </div>
                </div>
                <Button type="submit" text={"Next"} disabled={!isFormValid} />
            </form>
        </div>
    );
}
