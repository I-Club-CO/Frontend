import React, { useState } from "react";
import styles from "./PasswordRecovery.module.css";
import Header from "../../entryCommonComponents/Header/Header";
import { useRegLogForm } from "../../entryCommonComponents/useRegLogForm";
import useSendDataToServerPassRecovery from "./useSendDataToServerPassRecovery";
import InputField from "../../entryCommonComponents/InputField/InputField";
import Loader from "../../../common/Loader";
import { useDispatch } from "react-redux";
import { nextStep } from "../../../store/headerProgressBarSlice";
import ButtonWelcomeBack from "../ButtonWelcomeBack/ButtonWelcomeBack";
import UnsuccessfulAttemptPassRec from "./UnsuccessfulAttemptPassRec/UnsuccessfulAttemptPassRec";

function PasswordRecovery() {
    const { register, errors, isValid, handleSubmit, setValue } = useRegLogForm();

    const { sendDataToServer, dataSent, errorSend, setErrorSend } = useSendDataToServerPassRecovery(),
        dispatch = useDispatch(),
        onSuccess = () => dispatch(nextStep()),
        onSubmit = (data) => {
            sendDataToServer(data, onSuccess);
        };

    const [modalActive, setModalActive] = useState(false),
        closeModal = () => {
            setModalActive(false)
            setErrorSend(false)
        }

    (errorSend && !modalActive) && setModalActive(true)

    errorSend && setValue("email", "")

    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.mainText}>Password recovery</h1>

            {errorSend && <UnsuccessfulAttemptPassRec active={modalActive} setActive={closeModal} />}

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
                    <ButtonWelcomeBack type="submit" text="Send again" disabled={!isValid}/>
                </form>
            )}
            <span className={styles.subText}>
                Please enter your email address so we can send you a password
                reset form.
            </span>
        </div>
    );
}

export default PasswordRecovery;
