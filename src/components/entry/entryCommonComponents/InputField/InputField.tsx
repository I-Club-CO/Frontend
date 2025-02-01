
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import styles from "./InputField.module.css";
import { FC } from "react";

interface InputFieldProps<TInputFieldValues> {
    name: string;
    text: string;
    placeholder: string;
    type: "text" | "number" | "password";
    register: UseFormRegister<TInputFieldValues>;
    validationRules: any;
    errors: FieldError;
}

const InputField: FC<InputFieldProps> = ({
    name,
    text,
    placeholder,
    type = "text",
    register,
    validationRules,
    errors,
}) => {
    return (
        <div className={styles.wrap_input}>
            <p className={styles.text}>{text}</p>
            <input
                className={styles.input}
                type={type}
                placeholder={placeholder}
                {...(register ? register(name, validationRules) : {})}
            />
            <p className={styles.error_text}>
                {errors ? <span>{errors.message}</span> : ""}
            </p>
        </div>
    );
};
export default InputField;
