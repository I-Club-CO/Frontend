import React from "react";
import styles from "./ModalIndustry.module.css";
function ModalIndustry({ isOpen, onClose, industries, onSelectIndustries }) {
    if (!isOpen) return null;
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <p className={styles.header_text}>Choose your Industry...</p>
                    <button onClick={onClose}>close</button>
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
