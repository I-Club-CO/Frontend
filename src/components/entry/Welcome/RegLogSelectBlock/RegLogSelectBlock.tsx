import styles from "./RegLogSelectBlock.module.css";
import { NavLink } from "react-router-dom";
import useHandleStart from "../useHandleStart";
function RegLogSelectBlock() {

    const { handleRegistrationStart, handleLoginStart } = useHandleStart();

    return (
        <div className={styles.regLogBlock}>
            <p className={styles.mediumText}>Sign up to continue:</p>
            <NavLink
                onClick={handleRegistrationStart}
                to="/registration-email-password"
                className={styles.button}
            >
                Continue with email
            </NavLink>
            <NavLink
                onClick={handleLoginStart}
                to="/login-email-password"
                className={styles.smallText}
            >
                Login to account
            </NavLink>
        </div>
    );
}

export default RegLogSelectBlock;
