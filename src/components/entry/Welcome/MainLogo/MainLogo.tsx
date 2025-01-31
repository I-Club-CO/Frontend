import React, { FC } from "react";
import styles from "./MainLogo.module.css";
const MainLogo: FC = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.mainText}>
                Welcome{" "}
                <span className={styles.mainText_subBlock}>
                    to <span className={styles.subMainText}>MindMatch!</span>
                </span>
            </h1>
        </div>
    );
}

export default MainLogo;
