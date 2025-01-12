import React from "react";
import styles from "./ButtonWelcomeBack.module.css";
function ButtonWelcomeBack({ ...props }) {
    return (
        <button className={styles.btn} {...props}>
            {props.text}
        </button>
    );
}

export default ButtonWelcomeBack;
