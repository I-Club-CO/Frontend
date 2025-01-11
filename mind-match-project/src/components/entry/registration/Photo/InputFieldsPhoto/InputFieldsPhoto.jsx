import React, { useState } from "react";
import { useRegForm } from "../../../entryCommonComponents/useRegLogForm";
import { useDispatch } from "react-redux";
import useSendDataToServerPhoto from "../useSendDataToServerPhoto";
import useEnterNextPage from "../../../entryCommonComponents/useEnterNextPage";
import { setPhoto } from "../../../../store/registrationDataSlice";
import InputPhoto from "./InputPhoto/InputPhoto";
import PhotoPreview from "./PhotoPreview/PhotoPreview";
import Loader from "../../../../common/Loader";
import ButtonPhoto from "./ButtonPhoto/ButtonPhoto";
import { nextStep } from "../../../../store/headerProgressBarSlice";
export default function InputFieldsPhoto() {
    const dispatch = useDispatch(),
        [photoPreview, setPhotoPreview] = useState(null);

    const { register, errors, setValue, handleSubmit } = useRegForm(
        {},
        "onBlur"
    );

    const { sendData, dataSent } = useSendDataToServerPhoto();

    // const onSuccess = () => {
    //     dispatch(nextStep());
    // };

    const onSubmit = async (data) => {
        sendData(data)

    };
    useEnterNextPage({ handleSubmit, onSubmit });

    return (
        <>
            {dataSent ? (
                <Loader />
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputPhoto
                        register={register}
                        setValue={setValue}
                        setPhotoPreview={setPhotoPreview}
                        setPhoto={setPhoto}
                        dispatch={dispatch}
                    />
                    <PhotoPreview photoPreview={photoPreview} errors={errors} />
                    {/* <Button type="submit" text="Next" /> */}
                    <ButtonPhoto type="submit" />
                </form>
            )}
        </>
    );
}
