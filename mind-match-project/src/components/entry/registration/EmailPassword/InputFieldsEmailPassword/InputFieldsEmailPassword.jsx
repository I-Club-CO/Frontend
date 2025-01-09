import React, { useEffect } from "react";
import InputField from "../../../entryCommonComponents/InputField/InputField";
import Button from "../../../entryCommonComponents/Button/Button";
import { useRegForm } from "../../../entryCommonComponents/useRegLogForm";
import useOnSubmitEmailPassword from "../useOnSubmitEmailPassword";
import { useSelector } from "react-redux";
import { decryptPassword } from "../../../entryCommonComponents/passwordCipher";

function InputFieldsEmailPassword() {
    const { register, errors, isValid, handleSubmit, watch, setValue } =
            useRegForm(),
        { email, password } = useSelector((state) => state.registrationData),
        handleOnSubmit = useOnSubmitEmailPassword(watch("password")),
        onSubmit = (data) => {
            handleOnSubmit(data);
        };

    useEffect(() => {
        setValue("email", email);
        setValue("password", decryptPassword(password));
    }, [email, password, setValue]);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
                name="email"
                text="Email:"
                type="text"
                placeholder="Email..."
                register={register}
                validationRules={{
                    required: "Email is required.",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email format.",
                    },
                }}
                errors={errors.email}
            />
            <InputField
                name="password"
                text="Password:"
                type="password"
                placeholder="Create a password..."
                register={register}
                validationRules={{
                    required: "Password is required.",
                    pattern: {
                        value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                            "The password must be 8 characters, at least one uppercase letter, one lowercase letter and one number.",
                    },
                }}
                errors={errors.password}
            />
            <InputField
                name="repeatPassword"
                text="Repeat password:"
                type="password"
                placeholder="Repeat password..."
                register={register}
                validationRules={{
                    required: "Please repeat your password.",
                    validate: (value) => {
                        return value === decryptPassword(password) || "Passwords do not match.";
                    },
                }}
                errors={errors.repeatPassword}
            />

            <Button type="submit" text={"Next"} disabled={!isValid} />
        </form>
    );
}

export default InputFieldsEmailPassword;
