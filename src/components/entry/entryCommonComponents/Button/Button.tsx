import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.css";
import { nextStep } from "../../../store/headerProgressBarSlice";
import { useAppDispatch } from "../../../../hook";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}

const Button: FC<ButtonProps> = ({ text, ...props}) => {
    const dispatch = useAppDispatch(),
        next = () => {
            dispatch(nextStep());
        };
    return (
        <button {...props} className={styles.btn} onClick={next}>
            {text}
        </button>
    );
}

export default Button;
