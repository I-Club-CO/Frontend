import { decryptPassword } from "../../entryCommonComponents/passwordCipher";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { resetRegistrationData } from "../../../store/registrationDataSlice";
import { useAppSelector } from "../../../../hook";

export default function useSendDataToServerPhoto() {
    const [dataSent, setDataSent] = useState<boolean>(false),
        [errorDataSend, setErrorDataSend] = useState<boolean>(false)
    const allData = useAppSelector((state) => state.registrationData),
        navigate = useNavigate(),
        decryptingPassword = decryptPassword(allData.password);

    const sendData = useCallback(
        async (photo: null | File, onSuccess: () => void) => {
            setDataSent(true);
            try {
                const formData = new FormData();
                formData.append("email", allData.email);
                formData.append("password", decryptingPassword);
                formData.append("username", allData.username);
                formData.append("birthday", String(allData.birthday));
                formData.append("gender", allData.gender);
                formData.append("industry", allData.industry);
                formData.append("info", allData.info);
                formData.append("category", allData.category.join(","));
                formData.append("country", allData.country);
                formData.append("city", allData.city);
                formData.append("phone", allData.phone);
                if (photo) formData.append("image1", photo);

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
                setErrorDataSend(true)
                if (process.env.NODE_ENV === "development") {
                    console.error("Ошибка регистрации:", error);
                }
            } finally {
                setDataSent(false);
            }
        },
        [allData, navigate, decryptingPassword]
    );
    return { sendData, dataSent, errorDataSend };
}
