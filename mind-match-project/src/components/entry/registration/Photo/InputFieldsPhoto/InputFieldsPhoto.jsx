import React, { useState } from "react";
import { useRegForm } from "../../../entryCommonComponents/useRegLogForm";
import { useDispatch } from "react-redux";
import useSendDataToServerPhoto from "../useSendDataToServerPhoto";
import useEnterNextPage from "../../../entryCommonComponents/useEnterNextPage";
import { setPhoto } from "../../../../store/registrationDataSlice";
import Button from "../../../entryCommonComponents/Button/Button";
import InputPhoto from "./InputPhoto/InputPhoto";
import PhotoPreview from "./PhotoPreview/PhotoPreview";
export default function InputFieldsPhoto() {
    const dispatch = useDispatch(),
        [photoPreview, setPhotoPreview] = useState(null);

    const { register, errors, setValue, handleSubmit } = useRegForm(
        {},
        "onBlur"
    );

    const sendDataToServer = useSendDataToServerPhoto();

    const onSubmit = (data) => {
        sendDataToServer(data);
    };
    useEnterNextPage({ handleSubmit, onSubmit });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputPhoto
                register={register}
                setValue={setValue}
                setPhotoPreview={setPhotoPreview}
                setPhoto={setPhoto}
                dispatch={dispatch}
            />
            <PhotoPreview photoPreview={photoPreview} errors={errors} />
            <Button type="submit" text="Next" />
        </form>
    );
}
