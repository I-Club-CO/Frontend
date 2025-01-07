import React from "react";
import styles from "./GenderButton.module.css";
function GenderButton({genderChange, gender, gender_type, gender_img }) {
    return (
        <label
            className={`${styles.radio_button} ${
                gender === gender_type ? styles.button_active : ""
            }`}
        >
            <input
                onChange={() => genderChange(gender_type)}
                className={styles.radio_input}
                type="radio"
                value={gender_type}
            />
            <img src={gender_img} alt="Гендер"/>
        </label>
    );
}

export default GenderButton;
