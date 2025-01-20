import React from "react";
import styles from "./UnsuccessfulAttemptPassRec.module.css"
function UnsuccessfulAttemptPassRec({closeModal}) {
    return (
        <div className={styles.overlay} >
            <div onClick={(e) => e.stopPropagation()}>
                <div className={styles.main}>
                    <span className={styles.main_text}>There is no user with this email address</span>
                </div>
                <button className={styles.button}>Try again</button>
            </div>
        </div>
    )
}

export default UnsuccessfulAttemptPassRec;
