import React from "react";
import styles from "./UnsuccessfulAttemptPassRec.module.css"
function UnsuccessfulAttemptPassRec({active, setActive}) {
    return (
        <div className={active ? styles.overlayActive : styles.overlay} onClick={() => setActive(false)}>
            <div onClick={(e) => e.stopPropagation()}>
                <div className={styles.main}>
                    <span className={styles.main_text}>There is no user with this email address</span>
                </div>
                <button className={styles.button} onClick={() => setActive(false)}>Try again</button>
            </div>
        </div>
    )
}

export default UnsuccessfulAttemptPassRec;
