import React, { FC } from "react";
import styles from "./UnsuccessfulAttemptPassRec.module.css"

interface UnsuccessfulAttemptProps {
    active: boolean
    setActive: () => void
}

const UnsuccessfulAttemptPassRec: FC<UnsuccessfulAttemptProps> = ({active, setActive}) => {
    return (
        <div className={active ? styles.overlayActive : styles.overlay} onClick={() => setActive()}>
            <div onClick={(e) => e.stopPropagation()}>
                <div className={styles.main}>
                    <span className={styles.main_text}>There is no user with this email address</span>
                </div>
                <button className={styles.button} onClick={() => setActive()}>Try again</button>
            </div>
        </div>
    )
}

export default UnsuccessfulAttemptPassRec;
