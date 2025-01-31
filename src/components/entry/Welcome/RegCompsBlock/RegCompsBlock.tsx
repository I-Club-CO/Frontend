import React, { FC } from "react";
import styles from './RegCompsBlock.module.css'
import google from "../../../../assets/images/google.svg";
import yandex from "../../../../assets/images/yandex.svg";
import apple from "../../../../assets/images/apple.svg";
const RegCompsBlock: FC = () => {
    return (
        <div className={styles.regCompsBlock}>
            <p className={styles.mediumText}>Or sign up with:</p>
            <div className={styles.logos}>
                <img src={google} alt="google" />
                <img src={yandex} alt="yandex" />
                <img src={apple} alt="apple" />
            </div>
        </div>
    );
}

export default RegCompsBlock;
