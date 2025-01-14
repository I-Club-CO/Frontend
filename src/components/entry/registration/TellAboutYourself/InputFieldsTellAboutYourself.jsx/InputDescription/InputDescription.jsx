import React from "react";
import styles from "./InputDescription.module.css";
export default function InputDescription({register}) {
    return (
        <div className={styles.wrap_input}>
            <p className={styles.text}>Description:</p>
            <textarea
                {...register("info", {
                    maxLength: {
                        value: 1500,
                        message: "Your description is too long.",
                    },
                })}
                placeholder="Description 1500 characters..."
                className={`${styles.input} ${styles.input_textarea}`}
            ></textarea>
        </div>
    );
}
