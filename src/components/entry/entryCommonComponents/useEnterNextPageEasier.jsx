import { useDispatch } from "react-redux";
import { nextStep } from "../../store/headerProgressBarSlice";

export default function useEnterNextPageEasier () {
    const dispatch = useDispatch()
    return (event, isValid, handleSubmit, onSubmit) => {
        if (event.key === "Enter" && isValid) {
            handleSubmit(onSubmit)();
            dispatch(nextStep())
        }
    }
};