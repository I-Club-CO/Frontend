import React from "react";
import styles from "./Loader.module.css"

export default function Loader () {
    return (
        <div className={styles.spinner_container}>
            <div className={styles.spinner}></div>
        </div>
    );
};