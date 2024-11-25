import React from "react";
import styles from "./ProgressBar.module.css"
import { useSelector } from "react-redux";

function ProgressBar() {
    const currentStep = useSelector((state) => state.progressBar.currentStep),
        totalSteps = useSelector((state) => state.progressBar.totalSteps),
        progressPercentage = (currentStep / totalSteps) * 100;

    return (
        <div className={styles.container}>
            <div className={styles.content} style={{ width: `${progressPercentage}%`}}></div>
        </div>
    );
}

export default ProgressBar;
