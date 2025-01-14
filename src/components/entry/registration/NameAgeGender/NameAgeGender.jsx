import styles from "./NameAgeGender.module.css";
import Header from "../../entryCommonComponents/Header/Header";
import InputFieldsNameAgeGender from "./InputFieldsNameAgeGender/InputFieldsNameAgeGender";

export default function NameAgeGender() {
    return (
        <div className={styles.container}>
            <Header />

            <h1 className={styles.mainText}>What's your name</h1>
            <InputFieldsNameAgeGender/>
        </div>
    );
}
