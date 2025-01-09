import React from "react";
import styles from "./FormWelcomeBack.module.css"
import InputField from "../../../entryCommonComponents/InputField/InputField";
import { NavLink } from "react-router-dom";
import useSendDataToServerWelcomeBack from "./useSendDataToServerWelcomeBack";
import { useRegForm } from "../../../entryCommonComponents/useRegLogForm";
import Button from "../../../entryCommonComponents/Button/Button";

export default function FormWelcomeBack() {

const submitData = useSendDataToServerWelcomeBack()

const { register, errors, isValid, handleSubmit } = useRegForm();

const onSubmit = (data) => {
    submitData(data);
};
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
                name="email"
                text="Email:"
                placeholder="Email..."
                register={register}
                validationRules={{
                    required: "Email is required.",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email format.",
                    },
                }}
                errors={errors.email}
            />
            <InputField
                name="password"
                text="Password:"
                placeholder="Password..."
                type="password"
                register={register}
                validationRules={{
                    required: "Password is required.",
                    pattern: {
                        value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                            "The password must be 8 characters, at least one uppercase letter, one lowercase letter and one number.",
                    },
                }}
                errors={errors.password}
            />

            <NavLink
                to="/login-password-recovery"
                className={styles.secondary_text}
            >
                I forgot my password
            </NavLink>
            <Button type="submit" text="Next" disabled={!isValid} />
        </form>
    );
}
