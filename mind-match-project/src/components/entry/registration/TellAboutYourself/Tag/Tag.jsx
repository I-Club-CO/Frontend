import React from "react";
import styles from "./Tag.module.css";

function Tag(props) {
    return (
        <div className={styles.tag}>
            <p className={styles.tag_text}>{props.tag}</p>
        </div>
    );
}

export default Tag;
