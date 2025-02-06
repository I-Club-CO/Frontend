import { useNavigate } from "react-router-dom";
import styles from "./UnsuccessfulAttemptRegister.module.css";
import { FC } from "react";
const UnsuccessfulAttemptRegister: FC = () => {
    const navigate = useNavigate(),
        backToLogin = (): void => navigate("/");
    return (
        <div className={styles.overlay}>
            <div>
                <div className={styles.main}>
                    <span className={styles.main_text}>
                        A user with the same email address already exists.
                    </span>
                </div>
                <button className={styles.button} onClick={backToLogin}>
                    Return to login page
                </button>
            </div>
        </div>
    );
}
export default UnsuccessfulAttemptRegister