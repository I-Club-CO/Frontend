import { useDispatch } from "react-redux";
import {
    setActivity,
    setCategory,
    setInfo,
} from "../../../store/registrationDataSlice";
import { useNavigate } from "react-router-dom";
import styles from "./TellAboutYourself.module.css";
import Header from "../../entryCommonComponents/Header/Header";
import { useForm } from "react-hook-form";
import Button from "../../entryCommonComponents/Button/Button";
import tags from "./Tags";
import { useState } from "react";
import Modal from "react-modal";

export default function TellAboutYourself() {
    const dispatch = useDispatch(),
        navigate = useNavigate();

    const [checkedTags, setCheckedTags] = useState(
        tags.reduce((acc, tag) => {
            acc[tag] = false;
            return acc;
        }, {})
    );

    const {
            register,
            formState: { errors, isValid },
            handleSubmit,
            reset,
        } = useForm({
            mode: "onBlur",
        }),
        onSubmit = (data) => {
            console.log(data.category);
            dispatch(setActivity(data.activity));
            dispatch(setInfo(data.info));
            dispatch(setCategory(data.category));
            reset();

            navigate("/registration-location");
        };

    const toggleTag = (tag) => {
        setCheckedTags((prevState) => ({
            ...prevState,
            [tag]: !prevState[tag],
        }));
    };

    // const [modalIsOpen, setModalIsOpen] = useState(false);

    // const openModal = () => {
    //         setModalIsOpen(true);
    //     },
    //     closeModal = () => {
    //         setModalIsOpen(false);
    //     };

    // const modalContent = (

    // )

    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.mainText}>Tell about yourself</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div
                    className={`${styles.wrap_input} ${styles.wrap_firstInput}`}
                >
                    <p className={styles.text}>Industry:</p>
                    <input
                        className={styles.input}
                        {...register("activity", {
                            required: "Industry is required.",
                            // pattern: {
                            //     value: /^[^\s@]+$/,
                            //     message: "Invalid industry format.",
                            // },
                        })}
                        type="text"
                        placeholder="Choose your Industry..."
                    />
                    <p className={styles.error_text}>
                        {errors.activity ? (
                            <span>{errors.activity.message}</span>
                        ) : (
                            ""
                        )}
                    </p>
                </div>
                <div className={styles.wrap_input}>
                    <p className={styles.text}>Description:</p>
                    <textarea
                        {...register("info", {
                            maxLength: {
                                value: 1500,
                                message: "Your description is too long.",
                            },
                        })}
                        placeholder="Description 1500 characters..."
                        className={`${styles.input} ${styles.input_textarea}`}
                    ></textarea>
                </div>
                <div className={styles.tags_container}>
                    <p className={styles.text}>Tags:</p>
                    <hr className={styles.line} />
                    <div className={styles.tags}>
                        {tags.map((text) => (
                            <label
                                key={text}
                                className={`${styles.tag} ${
                                    checkedTags[text] ? styles.tag_active : ""
                                }`}
                                onClick={() => toggleTag(text)}
                            >
                                <input
                                    type="checkbox"
                                    value={text}
                                    {...register("category", {
                                        required: "Select at least 3 tags.",
                                        validate: (value) =>
                                            value.length >= 3 ||
                                            "Select at least 3 tags.",
                                    })}
                                    checked={checkedTags[text]}
                                    onChange={() => toggleTag(text)}
                                    className={styles.checkbox}
                                />
                                <p
                                    className={`${
                                        checkedTags[text]
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
                </div>
                <Button type="submit" text="Next" disabled={!isValid} />
            </form>
        </div>
    );
}
