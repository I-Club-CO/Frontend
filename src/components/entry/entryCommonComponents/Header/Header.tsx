import React, { FC } from "react";
import styles from "./Header.module.css";
import logo from "../../../../assets/images/header_mini-logo.svg";
import back_btn from "../../../../assets/images/back-btn.svg";
import ProgressBar from "./ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
import { prevStep } from "../../../store/headerProgressBarSlice";
import { useAppDispatch } from "../../../../hook";
const Header:FC = () => {
    const navigate = useNavigate(),
        dispatch = useAppDispatch(),
        back = () => {
            navigate(-1);
            dispatch(prevStep());
        };
    return (
        <div className={styles.header}>
            <img
                src={back_btn}
                className={styles.back_btn}
                onClick={back}
                alt="Назад"
            />
            <ProgressBar />
            <img src={logo} alt="logo" />
        </div>
    );
};

export default Header;
