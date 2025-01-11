import React from "react";
import styles from "./ButtonPhoto.module.css"

export default function ButtonPhoto({...props}) {
    return (
        <button className={styles.btn} {...props}>
            Next
        </button>
    );
}
