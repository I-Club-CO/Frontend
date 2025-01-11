import React, { useState } from "react";
import styles from "./InputFieldsTellAboutYourself.module.css";
import useOnSubmitTellAboutYourself from "../useOnSubmitTellAboutYourself";
import { useRegForm } from "../../../entryCommonComponents/useRegLogForm";
import industries from "./ModalIndustry/Industries";
import Button from "../../../entryCommonComponents/Button/Button";
import ModalIndustry from "./ModalIndustry/ModalIndustry";
import InputSelectIndustry from "./InputSelectIndustry/InputSelectIndustry";
import InputDescription from "./InputDescription/InputDescription";
import InputTags from "./InputTags/InputTags";
import handleChangeTags from "../handleChangeTags";
import useEnterNextPageEasier from "../../../entryCommonComponents/useEnterNextPageEasier";
import handleSelectedIndustry from "../handleSelectedIndustry";
import { useSelector } from "react-redux";
import useDefaultValuesInputTellAboutYourself from "./useDefaultValuesInputTellAboutYourself";

export default function InputFieldsTellAboutYourself() {
    const { industry, info, category } = useSelector(
        (state) => state.registrationData
    );

    const [checkedTags, setCheckedTags] = useState(category || []),
        handleChangedTags = handleChangeTags();

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

    const handleSelectedIndustries = handleSelectedIndustry(
        setSelectedIndustry,
        setValue,
        trigger,
        closeModal
    );

    useDefaultValuesInputTellAboutYourself({ industry, info, setValue });

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
                    onSelectIndustries={handleSelectedIndustries}
                />
            </div>
            <InputDescription register={register} />
            <InputTags
                checkedTags={checkedTags}
                handleChangeTags={(event) =>
                    handleChangedTags(event, setCheckedTags)
                }
                register={register}
                errors={errors}
            />
            <Button type="submit" text="Next" disabled={!isValid} />
        </form>
    );
}
