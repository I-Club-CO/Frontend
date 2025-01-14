import React from "react";
import styles from "./Photo.module.css";
import Header from "../../entryCommonComponents/Header/Header";
import InputFieldsPhoto from "./InputFieldsPhoto/InputFieldsPhoto";

function Photo() {

    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.mainText}>Photo</h1>
            <InputFieldsPhoto/>
        </div>
    );
}

export default Photo;
