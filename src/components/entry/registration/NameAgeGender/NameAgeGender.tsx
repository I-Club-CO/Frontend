import styles from "./NameAgeGender.module.css";
import Header from "../../entryCommonComponents/Header/Header";
import InputFieldsNameAgeGender from "./InputFieldsNameAgeGender/InputFieldsNameAgeGender";
import { FC } from "react";

const NameAgeGender: FC = () => {
    return (
        <div className={styles.container}>
            <Header />

            <h1 className={styles.mainText}>What's your name</h1>
            <InputFieldsNameAgeGender/>
        </div>
    );
}
export default NameAgeGender