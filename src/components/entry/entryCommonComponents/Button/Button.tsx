import React, { FC } from "react";
import styles from "./Button.module.css";
import { nextStep } from "../../../store/headerProgressBarSlice";
import { useAppDispatch } from "../../../../hook";

interface ButtonProps {

}

const Button: FC<ButtonProps> = ({ ...props }) => {
    const dispatch = useAppDispatch(),
        next = () => {
            dispatch(nextStep());
        };
    return (
        <button className={styles.btn} {...props} onClick={next}>
            {props.text}
        </button>
    );
}

export default Button;
