import React from "react";
import styles from "./FormWelcomeBack.module.css";
import InputField from "../../../entryCommonComponents/InputField/InputField";
import { NavLink } from "react-router-dom";
import useSendDataToServerWelcomeBack from "./useSendDataToServerWelcomeBack";
import { useRegLogForm } from "../../../entryCommonComponents/useRegLogForm";
import ButtonWelcomeBack from "../../ButtonWelcomeBack/ButtonWelcomeBack";
import { useDispatch } from "react-redux";
import { nextStep } from "../../../../store/headerProgressBarSlice";
import Loader from "../../../../common/Loader";
import UnsuccessfulAttemptLogin from "./UnsuccessfulAttemptLogin/UnsuccessfulAttemptLogin";

export default function FormWelcomeBack() {
    const { sendData, dataSent, errorDataSend } =
        useSendDataToServerWelcomeBack();

    const { register, errors, isValid, handleSubmit } = useRegLogForm(),
        dispatch = useDispatch();

    const onSuccess = () => dispatch(nextStep());

    const onSubmit = (data) => {
        sendData(data, onSuccess);
    };
    return (
        <>
            {errorDataSend && <UnsuccessfulAttemptLogin />}

            {dataSent ? (
                <Loader />
            ) : (
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
                                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message:
                                    "Password must consist of 8 characters, at least one uppercase letter, one lowercase letter, one special character and one number.",
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
                    <ButtonWelcomeBack
                        type="submit"
                        text="Next"
                        disabled={!isValid}
                    />
                </form>
            )}
        </>
    );
}
