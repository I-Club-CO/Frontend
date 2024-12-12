// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useNavigate } from "react-router-dom";
// import {
//     resetRegistrationData,
//     setPhoto,
// } from "../../../store/registrationDataSlice";
// import axios from "axios";

// function Photo() {
//     const dispatch = useDispatch(),
//         allData = useSelector((state) => state.registrationData),
//         [photoFile, setPhotoFile] = useState(null);

//     const changePhoto = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             // setPhotoFile(file);
//             // const fileUrl = URL.createObjectURL(file);
//             // dispatch(setPhoto(fileUrl));
//             setPhotoFile(file);
//             dis
//         }
//         dispatch(setPhoto(event.target.value));
//     };

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
//             formData.append("img", allData.img);
//             formData.append("phone", allData.phone);
//             const response = await axios.post(
//                 "https://chat.serveo.net/img/",
//                 formData,
//             );

//             if (response.status === 201) {
//                 alert("Registration successful!");
//                 dispatch(resetRegistrationData());
//                 navigate("/registration-verification-code");
//             }
//         } catch (error) {
//             console.error("Ошибка при отправке данных на сервер:", error);
//         }
//     };
//     const navigate = useNavigate(),
//     back = () => {
//         navigate(-1);
//     };
//     return (
//         <div>
//             <input type="file" accept="image/*" onChange={changePhoto} />
//             {photoFile && (
//                 <img
//                     src={URL.createObjectURL(photoFile)}
//                     alt="preview"
//                     width="200"
//                 />
//             )}
//             <button onClick={back}>Back</button>
//             <button onClick={sendDataToServer}>Отправить данные</button>
//             <NavLink to="/registration-verification-code">Next page</NavLink>
//         </div>
//     );
// }

// export default Photo;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
    resetRegistrationData,
    setPhoto,
} from "../../../store/registrationDataSlice";
import axios from "axios";
import { useForm } from "react-hook-form";
import styles from "./Photo.module.css";
import Header from "../../entryCommonComponents/Header/Header";
import Button from "../../entryCommonComponents/Button/Button";

function Photo() {
    const dispatch = useDispatch(),
        navigate = useNavigate(),
        allData = useSelector((state) => state.registrationData),
        [photoFile, setPhotoFile] = useState(null);

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur",
    });

    const isFileValid = (file) => {
        if (!file) return false;
        const validTypes = ["image/jpeg", "image/png", "image/gif"];
        const maxSize = 1024 * 1024 * 5; // 5MB

        return validTypes.includes(file.type) && file.size <= maxSize;
    };

    const changePhoto = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPhotoFile(file);
        }
    };

    const sendDataToServer = async () => {
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
            if (photoFile) {
                formData.append("image1", photoFile);
            }

            const response = await axios.post(
                "https://vsp44.pythonanywhere.com/register/",
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            if (response.status === 201) {
                alert("Registration successful!");
                navigate("/registration-verification-code");
            }
        } catch (error) {
            console.error("Ошибка при отправке данных на сервер:", error);
        }
    };

    const onSubmit = (data) => {
        if (!isFileValid(photoFile)) {
            alert("Invalid file. Please upload a valid image file (max 5MB).");
            return;
        }

        dispatch(setPhoto(photoFile));
        sendDataToServer();
    };

    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.mainText}>Photo</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.wrap_input}>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={changePhoto}
                    />
                </div>
                {photoFile && (
                    <img
                        src={URL.createObjectURL(photoFile)}
                        alt="preview"
                        width="200"
                        onLoad={() => URL.revokeObjectURL(photoFile)}
                    />
                )}
                <Button type="submit" text="Next" />
            </form>
        </div>
    );
}

export default Photo;
