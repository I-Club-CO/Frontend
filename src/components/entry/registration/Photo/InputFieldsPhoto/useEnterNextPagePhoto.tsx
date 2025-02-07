import { useEffect } from "react";
import { useAppDispatch } from "../../../../../hook";
import {FieldValues, UseFormHandleSubmit } from "react-hook-form";

interface EnterNextPageProps<T extends FieldValues> {
    handleSubmit: UseFormHandleSubmit<T>
    onSubmit: (data: T) => void
}

export default function useEnterNextPagePhoto<T extends FieldValues>({handleSubmit, onSubmit}: EnterNextPageProps<T>) {
    const dispatch = useAppDispatch()
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
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
