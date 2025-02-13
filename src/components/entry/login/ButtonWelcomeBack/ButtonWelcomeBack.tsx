import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./ButtonWelcomeBack.module.css";

interface ButtonWelcomeBack extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}

const ButtonWelcomeBack: FC<ButtonWelcomeBack> = ({ ...props }) => {
    return (
        <button className={styles.btn} {...props}>
            {props.text}
        </button>
    );
}

export default ButtonWelcomeBack;
