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

function Photo() {
    const dispatch = useDispatch();
    const allData = useSelector((state) => state.registrationData);
    const [photoFile, setPhotoFile] = useState(null);
    const navigate = useNavigate();

    const changePhoto = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPhotoFile(file);
            const fileUrl = URL.createObjectURL(file);
            dispatch(setPhoto(fileUrl));
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
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );

            if (response.status === 201) {
                alert("Registration successful!");
                // dispatch(resetRegistrationData());
                navigate("/registration-verification-code");
            }
        } catch (error) {
            console.error("Ошибка при отправке данных на сервер:", error);
        }
    };

    const back = () => {
        navigate(-1);
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={changePhoto} />
            {photoFile && (
                <img
                    src={URL.createObjectURL(photoFile)}
                    alt="preview"
                    width="200"
                />
            )}
            <button onClick={back}>Back</button>
            <button onClick={sendDataToServer}>Отправить данные</button>
            <NavLink to="/registration-verification-code">Next page</NavLink>
        </div>
    );
}

export default Photo;