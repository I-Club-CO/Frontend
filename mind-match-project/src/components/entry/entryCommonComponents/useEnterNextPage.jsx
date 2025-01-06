import { useEffect } from "react";
export default function useEnterNextPage ({handleSubmit, onSubmit}) {
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
    }, [handleSubmit, onSubmit]);
}
