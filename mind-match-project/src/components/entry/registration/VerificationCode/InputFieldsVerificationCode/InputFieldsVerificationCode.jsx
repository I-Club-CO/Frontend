import React from "react";
import styles from "./InputFieldsVerificationCode.module.css"
export default function InputFieldsVerificationCode() {
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={(event) =>
                handleKeyDown(event, isValid, handleSubmit, onSubmit)
            }
        >
            <InputField
                name="verify"
                text="Enter verification code:"
                type="number"
                placeholder="Verification code..."
                register={register}
                validationRules={{
                    required: "Verification code is required.",
                    pattern: {
                        value: /^[0-9]{6}$/,
                        message: "Invalid verification code.",
                    },
                }}
                errors={errors.verify}
                disabled={timer > 0 || isSubmitting}
            />
            {/* <div
                    className={`${styles.wrap_input} ${styles.wrap_firstInput}`}
                >
                    <p className={styles.text}>Enter verification code:</p>
                    <input
                        className={styles.input}
                        {...register("verify", {
                            required: "Verification code is required.",
                            pattern: {
                                value: /^[0-9]{6}$/,
                                message: "Invalid verification code.",
                            },
                        })}
                        type="number"
                        placeholder="Verification code..."
                        disabled={timer > 0 || isSubmitting} // Блокировка ввода при активном таймере
                    />
                    <p className={styles.error_text}>
                        {errors.verify ? (
                            <span>{errors.verify.message}</span>
                        ) : (
                            errorMessage && <span>{errorMessage}</span>
                        )}
                    </p>
                </div> */}

            {timer > 0 && (
                <p className={styles.subText}>
                    {formatTime(timer)} you can send the code again
                </p>
            )}

            <Button
                type="submit"
                text="Next"
                disabled={!isValid || isSubmitting || timer > 0} // Блокировка кнопки
            />
        </form>
    );
}
