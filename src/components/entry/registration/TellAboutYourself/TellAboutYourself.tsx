import styles from "./TellAboutYourself.module.css";
import Header from "../../entryCommonComponents/Header/Header";
import InputFieldsTellAboutYourself from "./InputFieldsTellAboutYourself.jsx/InputFieldsTellAboutYourself";
import { FC } from "react";

const TellAboutYourself: FC = () => {

    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.mainText}>Tell about yourself</h1>
            <InputFieldsTellAboutYourself/>
        </div>
    );
}
export default TellAboutYourself