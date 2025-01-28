import styles from "./InputField.module.css";

const InputField = ({
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
