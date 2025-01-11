import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { nextStep } from "../../store/headerProgressBarSlice";
export default function useEnterNextPage ({handleSubmit, onSubmit}) {
    const dispatch = useDispatch()
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                handleSubmit(onSubmit)();
                dispatch(nextStep())
            }
        };
    
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [dispatch, handleSubmit, onSubmit]);
}
