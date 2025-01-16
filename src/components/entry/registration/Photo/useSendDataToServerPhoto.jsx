import { useSelector } from "react-redux";
import { decryptPassword } from "../../entryCommonComponents/passwordCipher";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { resetRegistrationData } from "../../../store/registrationDataSlice";
export default function useSendDataToServerPhoto() {
    const [dataSent, setDataSent] = useState(false);
    const allData = useSelector((state) => state.registrationData),
        navigate = useNavigate(),
        decryptingPassword = decryptPassword(allData.password);

    const sendData = useCallback(
        async (photo, onSuccess) => {
            setDataSent(true);
            try {
                const formData = new FormData();
                formData.append("email", allData.email);
                formData.append("password", decryptingPassword);
                formData.append("username", allData.username);
                formData.append("birthday", allData.birthday);
                formData.append("gender", allData.gender);
                formData.append("industry", allData.industry);
                formData.append("info", allData.info);
                formData.append("category", allData.category);
                formData.append("country", allData.country);
                formData.append("city", allData.city);
                formData.append("phone", allData.phone);
                formData.append("image1", photo);

                const response = await axios.post(
                    "https://vsp44.pythonanywhere.com/register/",
                    formData
                );

                if (response.status === 201) {
                    onSuccess();
                    resetRegistrationData();
                    navigate("/verification-code?context=registration");
                }
            } catch (error) {
                console.error("Ошибка при отправке данных на сервер:", error);
            } finally {
                setDataSent(false);
            }
        },
        [allData, navigate, decryptingPassword]
    );
    return { sendData, dataSent };
}
