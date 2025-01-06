import React from "react";
import styles from "./InputTags.module.css"
import tags from "../Tags";
export default function InputTags({checkedTags, handleChangeTags, register, errors}) {
    return (
        <div className={styles.tags_container}>
            <p className={styles.text}>Tags:</p>
            <hr className={styles.line} />
            <div className={styles.tags}>
                {tags.map((text) => (
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
                                    checkedTags.length >= 2 ||
                                    "Select at least 3 tags.",
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
                ))}
            </div>
            <p className={styles.error_text}>
                {errors.category ? <span>{errors.category.message}</span> : ""}
            </p>
        </div>
    );
}
