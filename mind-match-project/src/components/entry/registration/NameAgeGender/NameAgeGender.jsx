import styles from "./NameAgeGender.module.css";
import Header from "../../entryCommonComponents/Header/Header";
import male from "../../../../assets/images/male.svg";
import female from "../../../../assets/images/female.svg";
import Button from "../../entryCommonComponents/Button/Button";
import { useEffect, useState } from "react";
import InputField from "../../entryCommonComponents/InputField/InputField";
import useOnSubmitNameAgeGender from "./useOnSubmitNameAgeGender";
import { useRegForm } from "../../entryCommonComponents/useRegLogForm";
import GenderButton from "./GenderButton/GenderButton";

export default function NameAgeGender() {

    // ЗАДАЧА НА ДАННЫЙ КОМПОНЕНТ: РЕАЛИЗОВАТЬ УПРОЩЕНИЕ КОДА ПУТЕМ РАЗБИВКИ ЕГО НА КОМПОНЕНТЫ:
    // 1. Вынести в отдельный компонент кнопку генедера
    // 2. Вынести в отдельный компонент обе кнопки (сделать по аналогии с EmailPassword.jsx)
    // 3. Вынести в отдельный компонент всю форму (как было сделано в компоненте EmailPassword.jsx)

    const { register, errors, isValid, handleSubmit } = useRegForm();

    const handleOnSubmit = useOnSubmitNameAgeGender(),
        onSubmit = (data) => {
            handleOnSubmit({ ...data, gender });
        };

    const [gender, setGender] = useState("");

    const isFormValid = isValid && gender;

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
                <InputField
                    name="username"
                    text="Username:"
                    placeholder="Username..."
                    register={register}
                    validationRules={{
                        required: "Username is required.",
                        minLength: {
                            value: 3,
                            message:
                                "Username must be at least 3 characters long.",
                        },
                        maxLength: {
                            value: 20,
                            message: "Username must not exceed 20 characters.",
                        },
                    }}
                    errors={errors.username}
                />

                <InputField
                    name="age"
                    text="Age:"
                    placeholder="Age..."
                    type="number"
                    register={register}
                    validationRules={{
                        required: "Age is required.",
                        min: {
                            value: 14,
                            message: "You must be at least 14 years old.",
                        },
                        max: {
                            value: 99,
                            message: "You must be less than 100 years old.",
                        },
                    }}
                    errors={errors.age}
                />

                <div className={styles.buttons_container}>
                    <h2 className={styles.buttons_mainText}>Gender:</h2>
                    <div className={styles.buttons}>
                        <label
                            className={`${styles.radio_button} ${
                                gender === "male" ? styles.button_active : ""
                            }`}
                        >
                            <input
                                // {...register("gender")}
                                onChange={() => setGender("male")}
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
                                // {...register("gender")}
                                onChange={() => setGender("female")}
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
