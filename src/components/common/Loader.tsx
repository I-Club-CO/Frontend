import React, { FC } from "react";
import styles from "./Loader.module.css"

const Loader:FC = () => {
    return (
        <div className={styles.spinner_container}>
            <div className={styles.spinner}></div>
        </div>
    );
};
export default Loader