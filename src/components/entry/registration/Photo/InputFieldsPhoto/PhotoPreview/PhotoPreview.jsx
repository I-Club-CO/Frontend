import React from "react";
import styles from "./PhotoPreview.module.css"
export default function PhotoPreview({photoPreview}) {
    return (
        <div className={styles.wrap_input}>
            <p className={styles.text}>Photo:</p>
            <div className={styles.preview}>
                {photoPreview && (
                    <img
                        className={styles.preview_photo}
                        src={photoPreview}
                        alt="preview"
                        width="200"
                        onLoad={() => URL.revokeObjectURL(photoPreview)}
                    />
                )}
            </div>
        </div>
    );
}
