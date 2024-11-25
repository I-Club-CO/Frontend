import React from "react";
import styles from "./Header.module.css";
import logo from "../../../../assets/images/header_mini-logo.svg";
import back_btn from "../../../../assets/images/back-btn.svg";
import ProgressBar from "./ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { prevStep } from "../../../store/headerProgressBarSlice";
function Header() {
    const navigate = useNavigate(),
        dispatch = useDispatch(),
        back = () => {
            navigate(-1);
            dispatch(prevStep())
        };
    return (
        <div className={styles.header}>
            <img src={back_btn} onClick={back} />
            <ProgressBar />
            <img src={logo} alt="logo" />
        </div>
    );
}

export default Header;
