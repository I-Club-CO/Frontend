import React, { useState } from "react";
import styles from "./InputFieldsVerificationCode.module.css";
import useTimer from "../useTimer";
import useSendDataToServerVerifyCode from "../useSendDataToServerVerifyCode";
import useEnterNextPageEasier from "../../entryCommonComponents/useEnterNextPageEasier";
import InputField from "../../entryCommonComponents/InputField/InputField";
import formatTime from "../formatTime";
import Button from "../../entryCommonComponents/Button/Button";
import Loader from "../../../common/Loader";
import { useForm } from "react-hook-form";

export interface FormValue {
    verify: string
}

export default function InputFieldsVerificationCode() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, formState: {errors, isValid}, handleSubmit, reset } = useForm<FormValue>({defaultValues: {}, mode: "onChange"}),
        { timer, startTimer } = useTimer();

    const { sendDataToServer, dataSent } = useSendDataToServerVerifyCode({
            setIsSubmitting,
            startTimer,
            reset,
        }),
        onSubmit = (data: FormValue) => {
            sendDataToServer(data);
        };

    const handleKeyDown = useEnterNextPageEasier<FormValue>();


    return (
        <>
            {dataSent ? (
                <Loader />
            ) : (
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    onKeyDown={(event) =>
                        handleKeyDown(event, isValid, handleSubmit, onSubmit)
                    }
                >
                    <InputField<FormValue, "verify">
                        name="verify"
                        text="Enter verification code:"
                        type="number"
                        placeholder="000000"
                        register={register}
                        validationRules={{
                            required: "Verification code is required.",
                            pattern: {
                                value: /^[0-9]{6}$/,
                                message: "Invalid verification code.",
                            },
                        }}
                        errors={errors.verify}
                        disabled={timer > 0 || isSubmitting}
                    />

                    {timer > 0 && (
                        <p className={styles.subText}>
                            {formatTime(timer)} you can send the code again
                        </p>
                    )}

                    <Button
                        type="submit"
                        text="Next"
                        disabled={!isValid || isSubmitting || timer > 0} // Блокировка кнопки
                    />
                </form>
            )}
        </>
    );
}
