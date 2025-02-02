
import { FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";
import styles from "./InputField.module.css";

interface InputFieldProps<TInputFieldValues extends FieldValues, TInputFieldsName extends Path<TInputFieldValues>> {
    name: TInputFieldsName;
    text: string;
    placeholder: string;
    type: "text" | "number" | "password";
    register: UseFormRegister<TInputFieldValues>;
    validationRules: RegisterOptions<TInputFieldValues, TInputFieldsName>;
    errors?: FieldError;
}

const InputField = <TInputFieldValues extends FieldValues, TInputFieldsName extends Path<TInputFieldValues>>({
    name,
    text,
    placeholder,
    type = "text",
    register,
    validationRules,
    errors,
}: InputFieldProps<TInputFieldValues, TInputFieldsName>) => {
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

