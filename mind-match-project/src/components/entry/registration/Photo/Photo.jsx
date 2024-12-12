// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import {
//     resetRegistrationData,
//     setPhoto,
// } from "../../../store/registrationDataSlice";
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import styles from "./Photo.module.css";
// import Header from "../../entryCommonComponents/Header/Header";
// import Button from "../../entryCommonComponents/Button/Button";
// import camera from "../../../../assets/images/camera.svg";

// function Photo() {
//     const dispatch = useDispatch(),
//         navigate = useNavigate(),
//         allData = useSelector((state) => state.registrationData),
//         [photoFile, setPhotoFile] = useState(null),
//         [photoPreview, setPhotoPreview] = useState(null);

//     const {
//         register,
//         formState: { errors, isValid },
//         handleSubmit,
//         reset,
//     } = useForm({
//         mode: "onBlur",
//     });

//     // const isFileValid = (file) => {
//     //     if (!file) return false;
//     //     const validTypes = ["image/jpeg", "image/png", "image/gif"];
//     //     const maxSize = 1024 * 1024 * 5;

//     //     return validTypes.includes(file.type) && file.size <= maxSize;
//     // };

//     // const changePhoto = (event) => {
//     //     const file = event.target.files[0];
//     //     if (file && isFileValid(file)) {
//     //         setPhotoFile(file);
//     //         const previewUrl = URL.createObjectURL(file);
//     //         setPhotoPreview(previewUrl);
//     //         dispatch(setPhoto(previewUrl));
//     //     } else {
//     //         alert("Invalid file. Please upload a valid image file (max 5MB).");
//     //     }
//     // };

//     const sendDataToServer = async () => {
//         try {
//             const formData = new FormData();
//             formData.append("email", allData.email);
//             formData.append("password", allData.password);
//             formData.append("username", allData.username);
//             formData.append("birthday", allData.birthday);
//             formData.append("gender", allData.gender);
//             formData.append("activity", allData.activity);
//             formData.append("info", allData.info);
//             formData.append("category", allData.category);
//             formData.append("country", allData.country);
//             formData.append("city", allData.city);
//             formData.append("phone", allData.phone);
//             if (photoFile) {
//                 formData.append("image1", photoFile);
//             }

//             const response = await axios.post(
//                 "https://vsp44.pythonanywhere.com/register/",
//                 formData,
//                 { headers: { "Content-Type": "multipart/form-data" } }
//             );

//             if (response.status === 201) {
//                 alert("Registration successful!");
//                 navigate("/registration-verification-code");
//                 dispatch(resetRegistrationData());
//             }
//         } catch (error) {
//             console.error("Ошибка при отправке данных на сервер:", error);
//         }
//     };

//     const onSubmit = () => {
//         sendDataToServer();
//     };

//     return (
//         <div className={styles.container}>
//             <Header />
//             <h1 className={styles.mainText}>Photo</h1>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div
//                     className={`${styles.wrap_firstInput} ${styles.wrap_input}`}
//                 >
//                     <input
//                         {...register("image1", {
//                             validate: {
//                                 validFileType: (value) => {
//                                     const file = value?.[0];
//                                     if (!file) return "File is required.";
//                                     const validTypes = [
//                                         "image/jpeg",
//                                         "image/png",
//                                         "image/gif",
//                                     ];
//                                     return (
//                                         validTypes.includes(file.type) ||
//                                         "Invalid file type. Allowed: JPEG, PNG, GIF."
//                                     );
//                                 },
//                                 validFileSize: (value) => {
//                                     const file = value?.[0];
//                                     if (!file) return "File is required.";
//                                     const maxSize = 1024 * 1024 * 5; // 5MB
//                                     return (
//                                         file.size <= maxSize ||
//                                         "File size must not exceed 5MB."
//                                     );
//                                 },
//                             },
//                         })}
//                         id="file-input"
//                         type="file"
//                         accept="image/*"
//                         onChange={(event) => {
//                             const file = event.target.files[0];
//                             if (file) {
//                                 setPhotoFile(file);
//                                 const previewUrl = URL.createObjectURL(file);
//                                 setPhotoPreview(previewUrl);
//                                 dispatch(setPhoto(previewUrl));
//                             }
//                         }}
//                         className={styles.hiddenInput}
//                     />
//                     <div className={styles.file_selection}>
//                         <label
//                             htmlFor="file-input"
//                             className={styles.customButton}
//                         >
//                             <img src={camera} className={styles.camera_icon} />
//                         </label>
//                         <p className={styles.file_selection_text}>
//                             Photo for profile and card
//                         </p>
//                     </div>
//                 </div>
//                 <div className={styles.wrap_input}>
//                     <p className={styles.text}>Photo:</p>
//                     <div className={styles.preview}>
//                         {photoPreview && (
//                             <img
//                                 className={styles.preview_photo}
//                                 src={photoPreview}
//                                 alt="preview"
//                                 width="200"
//                                 onLoad={() => URL.revokeObjectURL(photoPreview)}
//                             />
//                         )}
//                     </div>
//                     <p className={styles.error_text}>
//                         {errors.image1 ? (
//                             <span>{errors.image1.message}</span>
//                         ) : (
//                             ""
//                         )}
//                     </p>
//                 </div>
//                 <Button type="submit" text="Next" />
//             </form>
//         </div>
//     );
// }

// export default Photo;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    resetRegistrationData,
    setPhoto,
} from "../../../store/registrationDataSlice";
import axios from "axios";
import { useForm } from "react-hook-form";
import styles from "./Photo.module.css";
import Header from "../../entryCommonComponents/Header/Header";
import Button from "../../entryCommonComponents/Button/Button";
import camera from "../../../../assets/images/camera.svg";

function Photo() {
    const dispatch = useDispatch(),
        navigate = useNavigate(),
        allData = useSelector((state) => state.registrationData),
        [photoPreview, setPhotoPreview] = useState(null);

    const {
        register,
        setValue,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: "onBlur",
    });

    const sendDataToServer = async (data) => {
        try {
            const formData = new FormData();
            formData.append("email", allData.email);
            formData.append("password", allData.password);
            formData.append("username", allData.username);
            formData.append("birthday", allData.birthday);
            formData.append("gender", allData.gender);
            formData.append("activity", allData.activity);
            formData.append("info", allData.info);
            formData.append("category", allData.category);
            formData.append("country", allData.country);
            formData.append("city", allData.city);
            formData.append("phone", allData.phone);
            formData.append("image1", data.image1[0]); // Используем файл из формы

            const response = await axios.post(
                "https://vsp44.pythonanywhere.com/register/",
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            if (response.status === 201) {
                alert("Registration successful!");
                navigate("/registration-verification-code");
                dispatch(resetRegistrationData());
            }
        } catch (error) {
            console.error("Ошибка при отправке данных на сервер:", error);
        }
    };

    const onSubmit = (data) => {
        sendDataToServer(data);
    };

    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.mainText}>Photo</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div
                    className={`${styles.wrap_firstInput} ${styles.wrap_input}`}
                >
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
                                setValue("image1", [file]); // Устанавливаем значение поля формы
                                const previewUrl = URL.createObjectURL(file);
                                setPhotoPreview(previewUrl);
                                dispatch(setPhoto(previewUrl));
                            }
                        }}
                        className={styles.hiddenInput}
                    />
                    <div className={styles.file_selection}>
                        <label
                            htmlFor="file-input"
                            className={styles.customButton}
                        >
                            <img src={camera} className={styles.camera_icon} />
                        </label>
                        <p className={styles.file_selection_text}>
                            Photo for profile and card
                        </p>
                    </div>
                </div>
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
                    <p className={styles.error_text}>
                        {errors.image1 ? (
                            <span>{errors.image1.message}</span>
                        ) : (
                            ""
                        )}
                    </p>
                </div>
                <Button type="submit" text="Next" />
            </form>
        </div>
    );
}

export default Photo;