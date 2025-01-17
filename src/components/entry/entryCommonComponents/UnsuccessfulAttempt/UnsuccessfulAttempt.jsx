import styles from "./UnsuccessfulAttempt.module.css"
export default function UnsuccessfulAttempt({mainText, buttonText}) {
    return (
        <>
            <div className={styles.main}>
                <span className={styles.main_text}>User with this email address does not exist</span>
            </div>
            <button className={styles.button}>
                Return to login page
            </button>
        </>
    )
}