import styles from "./Location.module.css";
import Header from "../../entryCommonComponents/Header/Header";
import InputFieldsLocation from "./InputFieldsLocation/InputFieldsLocation";
import { useSelector } from "react-redux";

function Location() {
    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.mainText}>Location</h1>
            <InputFieldsLocation/>
        </div>
    );
}

export default Location;
