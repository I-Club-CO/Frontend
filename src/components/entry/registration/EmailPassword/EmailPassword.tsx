import React, { FC } from "react";
import styles from "./EmailPassword.module.css";
import Header from "../../entryCommonComponents/Header/Header";
import InputFieldsEmailPassword from "./InputFieldsEmailPassword/InputFieldsEmailPassword";

const EmailPassword: FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.mainText}>Let's get started</h1>
            <InputFieldsEmailPassword/>
            <span className={styles.subText}>
                The password must be 8 characters long, numbers and capital
                letters.
            </span>
        </div>
    );
}
export default EmailPassword