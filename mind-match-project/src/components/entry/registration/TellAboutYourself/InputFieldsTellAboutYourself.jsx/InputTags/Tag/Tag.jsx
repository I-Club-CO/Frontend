import React from "react";
import styles from "./Tag.module.css"
export default function Tag({register, text, checkedTags, handleChangeTags,}) {
    return (
        <label
            key={text}
            className={`${styles.tag} ${
                checkedTags.includes(text) ? styles.tag_active : ""
            }`}
        >
            <input
                type="checkbox"
                value={text}
                {...register("category", {
                    required: "Select at least 3 tags.",
                    validate: () =>
                        checkedTags.length >= 2 || "Select at least 3 tags.",
                })}
                checked={checkedTags.includes(text)}
                onChange={handleChangeTags}
                className={styles.checkbox}
            />
            <p
                className={`${
                    checkedTags.includes(text)
                        ? styles.tag_text_active
                        : styles.tag_text
                }`}
            >
                {text}
            </p>
        </label>
    );
}
