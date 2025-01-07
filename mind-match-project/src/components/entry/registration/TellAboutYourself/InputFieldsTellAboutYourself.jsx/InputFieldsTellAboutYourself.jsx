import React, { useState } from "react";
import styles from "./InputFieldsTellAboutYourself.module.css";
import useOnSubmitTellAboutYourself from "../useOnSubmitTellAboutYourself";
import { useRegForm } from "../../../entryCommonComponents/useRegLogForm";
import industries from "./ModalIndustry/Industries";
import Button from "../../../entryCommonComponents/Button/Button";
import ModalIndustry from "./ModalIndustry/ModalIndustry";
import InputSelectIndustry from "./InputSelectIndustry/InputSelectIndustry";
import InputDescription from "./InputDescription/InputDescription"
import InputTags from "./InputTags/InputTags";
import useHandleChangeTags from "../useHandleChangeTags";
import useEnterNextPageEasier from "../../../entryCommonComponents/useEnterNextPageEasier";
import useHandleSelectedIndustry from "../useHandleSelectedIndustry";

export default function InputFieldsTellAboutYourself() {
    const [checkedTags, setCheckedTags] = useState([]);
    const handleChangeTags = useHandleChangeTags();

    const { register, errors, isValid, handleSubmit, setValue, trigger } =
            useRegForm({}, "onBlur"),
        handleOnSubmit = useOnSubmitTellAboutYourself(),
        onSubmit = (data) => {
            handleOnSubmit(data);
        };

    const handleKeyDown = useEnterNextPageEasier();

    const [isModalOpen, setIsModalOpen] = useState(false),
        [selectedIndustry, setSelectedIndustry] = useState("");

    const openModal = () => setIsModalOpen(true),
        closeModal = () => setIsModalOpen(false);

    const handleSelectedIndustry = useHandleSelectedIndustry(
        setSelectedIndustry,
        setValue,
        trigger,
        closeModal
    );

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={(event) =>
                handleKeyDown(event, isValid, handleSubmit, onSubmit)
            }
        >
            <div className={`${styles.wrap_input} ${styles.wrap_firstInput}`}>
                <p className={styles.text}>Industry:</p>
                <InputSelectIndustry
                    register={register}
                    errors={errors}
                    openModal={openModal}
                    selectedIndustry={selectedIndustry}
                />
                <ModalIndustry
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    industries={industries}
                    onSelectIndustries={handleSelectedIndustry}
                />
            </div>
            <InputDescription register={register} />
            <InputTags
                checkedTags={checkedTags}
                handleChangeTags={(event) =>
                    handleChangeTags(event, setCheckedTags)
                }
                register={register}
                errors={errors}
            />
            <Button type="submit" text="Next" disabled={!isValid} />
        </form>
    );
}
