import React, { useState } from "react";
import { useRegForm } from "../../../entryCommonComponents/useRegLogForm";
import { useDispatch } from "react-redux";
import useSendDataToServerPhoto from "../useSendDataToServerPhoto";
import useEnterNextPagePhoto from "./useEnterNextPagePhoto";
import InputPhoto from "./InputPhoto/InputPhoto";
import PhotoPreview from "./PhotoPreview/PhotoPreview";
import Loader from "../../../../common/Loader";
import ButtonPhoto from "./ButtonPhoto/ButtonPhoto";
import { nextStep } from "../../../../store/headerProgressBarSlice";
import UnsuccessfulAttemptRegister from "./UnsuccessfulAttemptRegister/UnsuccessfulAttemptRegister";

export default function InputFieldsPhoto() {
    const dispatch = useDispatch(),
        [photoPreview, setPhotoPreview] = useState(""),
        [photo, setPhoto] = useState(null);

    const { handleSubmit } = useRegForm({}, "onBlur");

    const { sendData, dataSent, errorDataSend } = useSendDataToServerPhoto();

    const onSuccess = () => dispatch(nextStep());

    const onSubmit = () => {
        sendData(photo, setPhotoPreview, onSuccess);
    };

    useEnterNextPagePhoto({ handleSubmit, onSubmit });

    return (
        <>
            {errorDataSend && <UnsuccessfulAttemptRegister />}

            {dataSent ? (
                <Loader />
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputPhoto
                        setPhoto={setPhoto}
                        setPhotoPreview={setPhotoPreview}
                    />
                    <PhotoPreview photoPreview={photoPreview} />
                    <ButtonPhoto type="submit" />
                </form>
            )}
        </>
    );
}
