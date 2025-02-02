import React, { FC, useEffect, useMemo } from "react";
import InputField from "../../../entryCommonComponents/InputField/InputField";
import Button from "../../../entryCommonComponents/Button/Button";
import useOnSubmitEmailPassword from "../useOnSubmitEmailPassword";
import { decryptPassword } from "../../../entryCommonComponents/passwordCipher";
import useDefaultValuesInputEmailPassword from "./useDefaultValuesInputEmailPassword";
import { useAppSelector } from "../../../../../hook";
import { useForm } from "react-hook-form";

export interface FormValues {
    email: string;
    password: string;
    repeatPassword: string;
}

const InputFieldsEmailPassword: FC = () => {
    const {
            register,
            formState: { errors, isValid },
            handleSubmit,
            watch,
            setValue,
            trigger,
        } = useForm<FormValues>({ defaultValues: {}, mode: "onChange" }),
        password = watch("password"),
        repeatPassword = watch("repeatPassword"),
        { email, password: encryptedPassword } = useAppSelector(
            (state) => state.registrationData
        ),
        handleOnSubmit = useOnSubmitEmailPassword(repeatPassword),
        onSubmit = (data: FormValues): void => {
            handleOnSubmit(data);
        };

    const decryptedPassword = useMemo(
        () => (encryptedPassword ? decryptPassword(encryptedPassword) : ""),
        [encryptedPassword]
    );

    useDefaultValuesInputEmailPassword({ email, decryptedPassword, setValue });

    useEffect(() => {
        trigger(); // Это пересчитает isValid
    }, [email, decryptedPassword, trigger]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputField<FormValues, "email">
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
            <InputField<FormValues, "password">
                name="password"
                text="Password:"
                type="password"
                placeholder="Create a password..."
                register={register}
                validationRules={{
                    required: "Password is required.",
                    pattern: {
                        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                            "Password must consist of 8 characters, at least one uppercase letter, one lowercase letter, one special character and one number.",
                    },
                }}
                errors={errors.password}
            />
            <InputField<FormValues, "repeatPassword">
                name="repeatPassword"
                text="Repeat password:"
                type="password"
                placeholder="Repeat password..."
                register={register}
                validationRules={{
                    required: "Please repeat your password.",
                    validate: (value: string) => {
                        return value === password || "Passwords do not match.";
                    },
                }}
                errors={errors.repeatPassword}
            />

            <Button type="submit" text={"Next"} disabled={!isValid} />
        </form>
    );
};

export default InputFieldsEmailPassword;
