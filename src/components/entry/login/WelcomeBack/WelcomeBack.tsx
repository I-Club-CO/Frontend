import React, { FC } from "react";

import styles from "./WelcomeBack.module.css";
import Header from "../../entryCommonComponents/Header/Header";
import FormWelcomeBack from "./FormWelcomeBack/FormWelcomeBack";

const WelcomeBack: FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.mainText}>Welcome back</h1>

            <FormWelcomeBack />
        </div>
    );
}

export default WelcomeBack;
