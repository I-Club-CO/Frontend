import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./ButtonPhoto.module.css"

const ButtonPhoto = ({...props}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button {...props} className={styles.btn}>
            Next
        </button>
    );
}
export default ButtonPhoto