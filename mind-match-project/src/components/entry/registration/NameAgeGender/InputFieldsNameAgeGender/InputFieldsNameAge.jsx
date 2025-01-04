import React from "react";
import InputField from "../../../entryCommonComponents/InputField/InputField";
import useOnSubmitNameAgeGender from "../useOnSubmitNameAgeGender";

function InputFieldsNameAge() {
    const { register, errors, isValid, handleSubmit, watch } = useRegForm();

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
                            message:
                                "Username must be at least 3 characters long.",
                        },
                        maxLength: {
                            value: 20,
                            message: "Username must not exceed 20 characters.",
                        },
                    }}
                    errors={errors.username}
                />

                <InputField
                    name="age"
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
                    errors={errors.age}
                />

                {/* <div className={styles.buttons_container}>
                    <h2 className={styles.buttons_mainText}>Gender:</h2>
                    <div className={styles.buttons}>
                        <label
                            className={`${styles.radio_button} ${
                                gender === "male" ? styles.button_active : ""
                            }`}
                        >
                            <input
                                {...register("gender")}
                                className={styles.radio_input}
                                type="radio"
                                value="male"
                            />
                            <img src={male} className={styles.button_img} />
                        </label>
                        <label
                            className={`${styles.radio_button} ${
                                gender === "female" ? styles.button_active : ""
                            }`}
                        >
                            <input
                                {...register("gender")}
                                className={styles.radio_input}
                                type="radio"
                                value="female"
                            />
                            <img
                                src={female}
                                className={`${styles.button_img} ${styles.button_img_female}`}
                            />
                        </label>
                    </div>
                </div> */}
                <Button type="submit" text={"Next"} disabled={!isFormValid} />
            </form>
    );
}

export default InputFieldsNameAge;
