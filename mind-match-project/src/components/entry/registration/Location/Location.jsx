import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCity, setCountry } from "../../../store/registrationDataSlice";
import { useForm } from "react-hook-form";
import styles from "./Location.module.css";
import Header from "../../entryCommonComponents/Header/Header";
import Button from "../../entryCommonComponents/Button/Button";

function Location() {
    const dispatch = useDispatch(),
        navigate = useNavigate();

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        dispatch(setCity(data.city));
        dispatch(setCountry(data.country));
        reset();

        navigate("/registration-photo");
    };
    return (
        <div className={styles.container}>
            <Header />
            <h1 className={styles.mainText}>Location</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div
                    className={`${styles.wrap_input} ${styles.wrap_firstInput}`}
                >
                    <p className={styles.text}>City:</p>
                    <input
                        className={styles.input}
                        {...register("city", {
                            required: "City is required.",
                        })}
                        type="text"
                        placeholder="City..."
                    />
                    <p className={styles.error_text}>
                        {errors.city ? <span>{errors.city.message}</span> : ""}
                    </p>
                </div>
                <div className={styles.wrap_input}>
                    <p className={styles.text}>Country:</p>
                    <input
                        className={styles.input}
                        {...register("country", {
                            required: "Country is required.",
                        })}
                        type="text"
                        placeholder="Country..."
                    />
                    <p className={styles.error_text}>
                        {errors.country ? (
                            <span>{errors.country.message}</span>
                        ) : (
                            ""
                        )}
                    </p>
                </div>
                {/* Здесь должна находиться интерактивная карта */}
                <Button type="submit" text="Next" disabled={!isValid} />
            </form>
        </div>
    );
}

export default Location;
