import React, { useEffect, useState } from "react";
import styles from "./InputFieldsNameAgeGender.module.css";
import InputField from "../../../entryCommonComponents/InputField/InputField";
import useOnSubmitNameAgeGender from "../useOnSubmitNameAgeGender";
import GenderButton from "./GenderButton/GenderButton";
import male from "../../../../../assets/images/male.svg";
import female from "../../../../../assets/images/female.svg";
import Button from "../../../entryCommonComponents/Button/Button";
import { useRegLogForm } from "../../../entryCommonComponents/useRegLogForm";
import useEnterNextPage from "../../../entryCommonComponents/useEnterNextPage";
import { useSelector } from "react-redux";
import useDefaultValuesInputNameAgeGender from "./useDefaultValuesInputNameAgeGender";

function InputFieldsNameAgeGender() {
    const { register, errors, isValid, handleSubmit, setValue, trigger } = useRegLogForm(),
        {
            username,
            birthday,
            gender: storedGender,
        } = useSelector((state) => state.registrationData),
        [gender, setGender] = useState(storedGender || "");

    const handleOnSubmit = useOnSubmitNameAgeGender(),
        onSubmit = (data) => {
            handleOnSubmit({ ...data, gender });
        };

    const handleGenderChange = (value) => {
        setGender(value);
    };

    const isFormValid = isValid && gender;

    useEnterNextPage({ handleSubmit, onSubmit });

    useDefaultValuesInputNameAgeGender({
        username,
        birthday,
        setValue,
    });

    useEffect(() => {
        trigger(); // Это пересчитает isValid
    }, [username, birthday, gender, trigger]);


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
                name="username"
                text="Username:"
                placeholder="Username..."
                register={register}
                validationRules={{
                    required: "Username is required.",
                    minLength: {
                        value: 3,
                        message: "Username must be at least 3 characters long.",
                    },
                    maxLength: {
                        value: 20,
                        message: "Username must not exceed 20 characters.",
                    },
                }}
                errors={errors.username}
            />

            <InputField
                name="birthday"
                text="Age:"
                placeholder="Age..."
                type="number"
                register={register}
                validationRules={{
                    required: "Age is required.",
                    min: {
                        value: 14,
                        message: "You must be at least 14 years old.",
                    },
                    max: {
                        value: 99,
                        message: "You must be less than 100 years old.",
                    },
                }}
                errors={errors.birthday}
            />

            <div className={styles.buttons_container}>
                <h2 className={styles.buttons_mainText}>Gender:</h2>
                <div className={styles.buttons}>
                    <GenderButton
                        genderChange={handleGenderChange}
                        gender={gender}
                        gender_type="male"
                        gender_img={male}
                    />
                    <GenderButton
                        genderChange={handleGenderChange}
                        gender={gender}
                        gender_type="female"
                        gender_img={female}
                    />
                </div>
            </div>
            <Button type="submit" text={"Next"} disabled={!isFormValid} />
        </form>
    );
}

export default InputFieldsNameAgeGender;
