
import { useNavigate } from "react-router-dom";
import styles from "./UnsuccessfulAttemptLogin.module.css";
export default function UnsuccessfulAttemptLogin() {
    const navigate = useNavigate(),
        backToRegister = () => navigate("/")
    return (
        <div className={styles.overlay}>
            <div>
                <div className={styles.main}>
                    <span className={styles.main_text}>
                        User with this email address does <span className={styles.main_text_red}>not exist</span>
                    </span>
                </div>
                <button className={styles.button} onClick={backToRegister}>Return to registration page</button>
            </div>
        </div>
    );
}
