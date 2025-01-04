import React from "react";
import styles from "./GenderButton.module.css"
function GenderButton({gender, gender_img, register}) {
    return (
        <label
            className={`${styles.radio_button} ${
                gender === "male" ? styles.button_active : ""
            }`}
        >
            <input
                register={register}
                className={styles.radio_input}
                type="radio"
                value="male"
            />
            <img src={gender_img} className={styles.button_img} />
        </label>
    );
}

export default GenderButton;
