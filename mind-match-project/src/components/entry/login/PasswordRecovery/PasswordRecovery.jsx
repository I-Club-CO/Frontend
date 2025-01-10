import React from "react";
import styles from "./PasswordRecovery.module.css";
import Header from "../../entryCommonComponents/Header/Header";
import Button from "../../entryCommonComponents/Button/Button";
import { useRegForm } from "../../entryCommonComponents/useRegLogForm";
import useSendDataToServerPassRecovery from "./useSendDataToServerPassRecovery";
import InputField from "../../entryCommonComponents/InputField/InputField";

function PasswordRecovery() {
    const { register, errors, isValid, handleSubmit } = useRegForm();

    const sendDataToServer = useSendDataToServerPassRecovery(),
        onSubmit = (data) => {
            sendDataToServer(data);
        };

    return (
        <div className={styles.container}>
            
            <Header />
            <h1 className={styles.mainText}>Password recovery</h1>
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
