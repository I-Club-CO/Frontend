import React, { useState } from "react";
import useSendDataToServerPhoto from "../useSendDataToServerPhoto";
import useEnterNextPagePhoto from "./useEnterNextPagePhoto";
import InputPhoto from "./InputPhoto/InputPhoto";
import PhotoPreview from "./PhotoPreview/PhotoPreview";
import Loader from "../../../../common/Loader";
import ButtonPhoto from "./ButtonPhoto/ButtonPhoto";
import { nextStep } from "../../../../store/headerProgressBarSlice";
import UnsuccessfulAttemptRegister from "./UnsuccessfulAttemptRegister/UnsuccessfulAttemptRegister";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../../../hook";

interface FormValue {
    photo: File | null
}

export default function InputFieldsPhoto() {
    const dispatch = useAppDispatch(),
        [photoPreview, setPhotoPreview] = useState(""),
        [photo, setPhoto] = useState<File | null>(null);

    const { handleSubmit } = useForm<FormValue>({defaultValues: {}, mode: "onBlur"});

    const { sendData, dataSent, errorDataSend } = useSendDataToServerPhoto();

    const onSuccess = (): void => {dispatch(nextStep())};

    const onSubmit = (): void => {
        sendData(photo, onSuccess);
    };

    useEnterNextPagePhoto<FormValue>({ handleSubmit, onSubmit });

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
