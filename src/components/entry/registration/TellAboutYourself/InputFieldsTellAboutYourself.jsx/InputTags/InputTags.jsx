import React from "react";
import styles from "./InputTags.module.css";
import tags from "./Tags"
import Tag from "./Tag/Tag";
export default function InputTags({
    checkedTags,
    handleChangeTags,
    register,
    errors,
}) {
    return (
        <div className={styles.tags_container}>
            <p className={styles.text}>Tags:</p>
            <hr className={styles.line} />
            <div className={styles.tags}>
                {tags.map((text) => (
                    <Tag
                        key={text}
                        register={register}
                        text={text}
                        checkedTags={checkedTags}
                        handleChangeTags={handleChangeTags}
                    />
                ))}
            </div>
            <p className={styles.error_text}>
                {errors.category ? <span>{errors.category.message}</span> : ""}
            </p>
        </div>
    );
}
