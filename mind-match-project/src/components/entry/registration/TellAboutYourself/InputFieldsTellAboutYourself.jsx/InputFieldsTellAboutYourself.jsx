import React, { useState } from "react";
import styles from "./InputFieldsTellAboutYourself.module.css";
import useOnSubmitTellAboutYourself from "../useOnSubmitTellAboutYourself";
import { useRegForm } from "../../../entryCommonComponents/useRegLogForm";
import industries from "../ModalIndustry/Industries";
import Button from "../../../entryCommonComponents/Button/Button";
import ModalIndustry from "../ModalIndustry/ModalIndustry";
import InputSelectIndustry from "../InputSelectIndustry/InputSelectIndustry";
import InputDescription from "../InputDescription/InputDescription";
import InputTags from "../InputTags/InputTags";

export default function InputFieldsTellAboutYourself() {
    // const dispatch = useDispatch(),
    //     navigate = useNavigate();

    const [checkedTags, setCheckedTags] = useState([]),
        handleChangeTags = (event) => {
            const tag = event.target.value;

            setCheckedTags((prevCheckedTags) =>
                prevCheckedTags.includes(tag)
                    ? prevCheckedTags.filter((item) => item !== tag)
                    : [...prevCheckedTags, tag]
            );
        };

    const { register, errors, isValid, handleSubmit, setValue, trigger } =
            useRegForm({}, "onBlur"),
        handleOnSubmit = useOnSubmitTellAboutYourself(),
        onSubmit = (data) => {
            handleOnSubmit(data);
        };

    const handleKewDown = (event) => {
        if (event.key === "Enter" && isValid) {
            handleSubmit(onSubmit)();
        }
    };

    const [isModalOpen, setIsModalOpen] = useState(false),
        [selectedIndustry, setSelectedIndustry] = useState("");

    const openModal = () => setIsModalOpen(true),
        closeModal = () => setIsModalOpen(false);

    const handleSelectedIndustry = (industry) => {
        setSelectedIndustry(industry);
        setValue("industry", industry);
        trigger("industry");
        closeModal();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKewDown}>
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
            <InputDescription 
                register={register}
            />
            <InputTags
                checkedTags={checkedTags}
                handleChangeTags={handleChangeTags}
                register={register}
                errors={errors}
            />
            {/* <div className={styles.tags_container}>
                <p className={styles.text}>Tags:</p>
                <hr className={styles.line} />
                <div className={styles.tags}>
                    {tags.map((text) => (
                        <label
                            key={text}
                            className={`${styles.tag} ${
                                checkedTags.includes(text)
                                    ? styles.tag_active
                                    : ""
                            }`}
                        >
                            <input
                                type="checkbox"
                                value={text}
                                {...register("category", {
                                    required: "Select at least 3 tags.",
                                    validate: () =>
                                        checkedTags.length >= 2 ||
                                        "Select at least 3 tags.",
                                })}
                                checked={checkedTags.includes(text)}
                                onChange={handleChangeTags}
                                className={styles.checkbox}
                            />
                            <p
                                className={`${
                                    checkedTags.includes(text)
                                        ? styles.tag_text_active
                                        : styles.tag_text
                                }`}
                            >
                                {text}
                            </p>
                        </label>
                    ))}
                </div>
                <p className={styles.error_text}>
                    {errors.category ? (
                        <span>{errors.category.message}</span>
                    ) : (
                        ""
                    )}
                </p>
            </div> */}
            <Button type="submit" text="Next" disabled={!isValid} />
        </form>
    );
}
