import styles from "./Welcome.module.css"
import { NavLink } from "react-router-dom";
import google from "../../../assets/images/google.svg"
import yandex from "../../../assets/images/yandex.svg"
import apple from "../../../assets/images/apple.svg"

export default function Welcome() {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.centralBlock}>
                <h1 className={styles.mainText}>Welcome <span className={styles.mainText_subBlock}>to <span className={styles.subMainText}>MindMatch!</span></span></h1>
            </div>
            <div className={styles.regBlock}>
                <p className={styles.mediumText}>Sign up to continue:</p>
                <NavLink to="/registration-email-password" className={styles.button}>Continue with email</NavLink>
                <NavLink to="/login-email-password" className={styles.smallText}>Login to account</NavLink>
            </div>
            <div className={styles.nextRegBlock}>
                <p className={styles.mediumText}>Or sign up with:</p>
                <div className={styles.logos}>
                    <img src={google} className={styles.logo} alt="google" />
                    <img src={yandex} className={styles.logo} alt="yandex" />
                    <img src={apple} className={styles.logo} alt="apple" />
                </div>
            </div>
            <div className={styles.footerBlock}>
                <p className={styles.footerBlock_text}>Terms of use</p>
                <p className={styles.footerBlock_text}>Privacy Policy</p>
            </div>
        </div>
    );
}

