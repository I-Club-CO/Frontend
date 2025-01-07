import React from "react";
import styles from "./ModalIndustry.module.css";
import arrow_white from "../../../../../../assets/images/arrow_white.svg"
function ModalIndustry({ isOpen, onClose, industries, onSelectIndustries }) {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header} onClick={onClose}>
                    <p className={styles.header_text}>Choose your Industry...</p>
                    <img className={styles.arrow_white} src={arrow_white} alt="Стрелка"/>
                </div>
                <div className={styles.main}>
                    <ul className={styles.industries}>
                        {industries.map(value => {
                            return (
                                <li
                                    key={value}
                                    className={styles.industry}
                                    onClick={() => onSelectIndustries(value)}
                                >
                                    {value}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ModalIndustry;
