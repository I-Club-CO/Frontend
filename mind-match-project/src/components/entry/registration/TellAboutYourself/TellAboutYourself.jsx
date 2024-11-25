import { useDispatch, useSelector } from "react-redux";
import { setActivity, setInfo } from "../../../store/registrationDataSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { useData } from "../../entryCommonComponents/useData";
import styles from "./TellAboutYourself.module.css";
import Header from "../../entryCommonComponents/Header/Header";
import { useForm } from "react-hook-form";
import Button from "../../entryCommonComponents/Button/Button";

export default function TellAboutYourself() {
    // const [activity, changeActivity] = useData(
    //         (state) => state.registrationData.activity,
    //         setActivity
    //     ),
    //     [info, changeInfo] = useData(
    //         (state) => state.registrationData.info,
    //         setInfo
    //     );

    const dispatch = useDispatch(),
        navigate = useNavigate();

    const {
            register,
            formState: { errors, isValid },
            handleSubmit,
            reset,
        } = useForm({
            mode: "onBlur",
        }),
        onSubmit = (data) => {
            dispatch(setActivity(data.activity));
            dispatch(setInfo(data.info));
            reset();

            navigate("/registration-location");
        };
    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.mainText}>Tell about yourself</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div
                    className={`${styles.wrap_input} ${styles.wrap_firstInput}`}
                >
                    <p className={styles.text}>Industry:</p>
                    <input
                        list="industries"
                        className={styles.input}
                        {...register("activity", {
                            required: "Industry is required.",
                            pattern: {
                                value: /^[^\s@]+$/,
                                message: "Invalid industry format.",
                            },
                        })}
                        type="text"
                        placeholder="Choose your Industry..."
                    />
                    <datalist id="industries" style={{backgroundColor: "black"}}>
                        <option value="Developer"></option>
                        <option value="Designer"></option>
                        <option value="Analyst"></option>
                    </datalist>
                </div>
            </form>
            <input type="text" />
            <textarea></textarea>
            <div>tags</div>
            <Button type="submit" text="Next" />
        </div>
    );
}
