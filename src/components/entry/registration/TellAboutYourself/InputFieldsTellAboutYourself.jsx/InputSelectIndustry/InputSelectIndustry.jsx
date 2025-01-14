import React from "react";
import styles from "./InputSelectIndustry.module.css";
import arrow_grey from "../../../../../../assets/images/arrow_grey.svg";

export default function InputSelectIndustry({
    register,
    errors,
    openModal,
    selectedIndustry,
}) {
    return (
        <div>
            <div className={styles.sub_wrap_input}>
                <input
                    className={styles.input}
                    onClick={openModal}
                    {...register("industry", {
                        required: "Industry is required.",
                    })}
                    type="text"
                    placeholder="Choose your Industry..."
                    value={selectedIndustry}
                    readOnly
                />
                <img
                    src={arrow_grey}
                    className={styles.arrow_grey}
                    alt="Стрелка"
                />
            </div>
            <p className={styles.error_text}>
                {errors.industry ? <span>{errors.industry.message}</span> : ""}
            </p>
        </div>
    );
}
