import React from "react";
import styles from "./VerificationCode.module.css";
import Header from "../entryCommonComponents/Header/Header";
import InputFieldsVerificationCode from "./InputFieldsVerificationCode/InputFieldsVerificationCode";

function VerificationCode() {
    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.mainText}>Verification code</h1>
            <InputFieldsVerificationCode />
        </div>
    );
}

export default VerificationCode;