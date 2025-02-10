import React, { FC } from "react";
import styles from "./PhotoPreview.module.css"

interface PhotoPreviewProps {
    photoPreview: string
}

const PhotoPreview:FC<PhotoPreviewProps> = ({photoPreview}) =>  {
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
export default PhotoPreview