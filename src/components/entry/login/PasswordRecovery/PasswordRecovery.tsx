import React, { useState } from "react";
import styles from "./PasswordRecovery.module.css";
import Header from "../../entryCommonComponents/Header/Header";
import { useRegLogForm } from "../../entryCommonComponents/useRegLogForm";
import useSendDataToServerPassRecovery from "./useSendDataToServerPassRecovery";
import InputField from "../../entryCommonComponents/InputField/InputField";
import Loader from "../../../common/Loader";
import { nextStep } from "../../../store/headerProgressBarSlice";
import ButtonWelcomeBack from "../ButtonWelcomeBack/ButtonWelcomeBack";
import UnsuccessfulAttemptPassRec from "./UnsuccessfulAttemptPassRec/UnsuccessfulAttemptPassRec";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../../hook";

export interface FormValue {
    email: string
}

function PasswordRecovery() {
    const { register, formState: {errors, isValid}, handleSubmit, setValue } = useForm<FormValue>({defaultValues: {}, mode: "onChange"});

    const { sendDataToServer, dataSent, errorSend, setErrorSend } = useSendDataToServerPassRecovery(),
        dispatch = useAppDispatch(),
        onSuccess = () => dispatch(nextStep()),
        onSubmit = (data: FormValue) => {
            sendDataToServer(data, onSuccess);
        };

    const [modalActive, setModalActive] = useState<boolean>(false),
        closeModal = (): void => {
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
                    <InputField<FormValue, "email">
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
