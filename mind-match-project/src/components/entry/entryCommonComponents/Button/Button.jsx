import React from "react";
import styles from "./Button.module.css";
import { useDispatch } from "react-redux";
import { nextStep } from "../../../store/headerProgressBarSlice";
function Button({ ...props}) {
    const dispatch = useDispatch();
    const next = () => {
        dispatch(nextStep());
    };
    return (
        // <button disabled={props.disabled} type={props.type} className={styles.btn} onClick={next}>
        //     {props.text}
        // </button>
        <button className={styles.btn}
            {...props}
            onClick={next}
        >
            {props.text}
        </button>
    );
}

export default Button;
