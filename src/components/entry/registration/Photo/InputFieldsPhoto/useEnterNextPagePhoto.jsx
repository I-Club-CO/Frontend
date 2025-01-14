import { useEffect } from "react";
import { useDispatch } from "react-redux";
export default function useEnterNextPagePhoto ({handleSubmit, onSubmit}) {
    const dispatch = useDispatch()
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                handleSubmit(onSubmit)();
            }
        };
    
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [dispatch, handleSubmit, onSubmit]);
}
