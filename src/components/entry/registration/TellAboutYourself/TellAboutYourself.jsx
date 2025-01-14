import styles from "./TellAboutYourself.module.css";
import Header from "../../entryCommonComponents/Header/Header";
import InputFieldsTellAboutYourself from "./InputFieldsTellAboutYourself.jsx/InputFieldsTellAboutYourself";

export default function TellAboutYourself() {

    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.mainText}>Tell about yourself</h1>
            <InputFieldsTellAboutYourself/>
        </div>
    );
}
