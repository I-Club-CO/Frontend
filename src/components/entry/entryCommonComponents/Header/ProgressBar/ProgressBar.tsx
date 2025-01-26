import React, { FC } from "react";
import styles from "./ProgressBar.module.css";
import { useAppSelector } from "../../../../../hook";

const ProgressBar:FC = () => {
    const currentStep = useAppSelector(
            (state) => state.progressBar.currentStep
        ),
        totalSteps = useAppSelector((state) => state.progressBar.totalSteps),
        progressPercentage = (currentStep / totalSteps) * 100;

    return (
        <div className={styles.container}>
            <div
                className={styles.content}
                style={{ width: `${progressPercentage}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
