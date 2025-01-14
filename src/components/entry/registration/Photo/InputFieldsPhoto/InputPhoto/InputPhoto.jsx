import React from "react";
import styles from "./InputPhoto.module.css";
import camera from "../../../../../../assets/images/camera.svg";
export default function InputPhoto({
    register,
    setValue,
    setPhotoPreview,
    setPhoto,
    dispatch,
}) {
    return (
        <div className={`${styles.wrap_firstInput} ${styles.wrap_input}`}>
            <input
                {...register("image1", {
                    validate: {
                        validFileType: (value) => {
                            const file = value?.[0];
                            if (!file) return "File is required.";
                            const validTypes = [
                                "image/jpeg",
                                "image/png",
                                "image/gif",
                            ];
                            return (
                                validTypes.includes(file.type) ||
                                "Invalid file type. Allowed: JPEG, PNG, GIF."
                            );
                        },
                        validFileSize: (value) => {
                            const file = value?.[0];
                            const maxSize = 1024 * 1024 * 5; // 5MB
                            return (
                                file.size <= maxSize ||
                                "File size must not exceed 5MB."
                            );
                        },
                    },
                })}
                id="file-input"
                type="file"
                accept="image/*"
                onChange={(event) => {
                    const file = event.target.files[0];
                    if (file) {
                        setValue("image1", [file]);
                        const previewUrl = URL.createObjectURL(file);
                        setPhotoPreview(previewUrl);
                        dispatch(setPhoto(previewUrl));
                    }
                }}
                className={styles.hiddenInput}
            />
            <div className={styles.file_selection}>
                <label htmlFor="file-input" className={styles.customButton}>
                    <img
                        src={camera}
                        className={styles.camera_icon}
                        alt="Камера"
                    />
                </label>
                <p className={styles.file_selection_text}>
                    Photo for profile and card
                </p>
            </div>
        </div>
    );
}
