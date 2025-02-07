import React, { ChangeEvent, FC } from "react";
import styles from "./InputPhoto.module.css";
import camera from "../../../../../../assets/images/camera.svg";

interface InputPhotoProps {
    setPhoto: (file: File) => void
    setPhotoPreview: (preview: string) => void
}

const InputPhoto: FC<InputPhotoProps> = ({ setPhoto, setPhotoPreview }) => {

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setPhoto(file)
            const reader = new FileReader()
            reader.onloadend = () => {
                if (typeof reader.result === "string") setPhotoPreview(reader.result)
            }
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className={`${styles.wrap_firstInput} ${styles.wrap_input}`}>
            <input
                id="file-input"
                type="file"
                accept="image/*,.png,.jpg,.gif,.web"
                onChange={handleFileChange}
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

export default InputPhoto
