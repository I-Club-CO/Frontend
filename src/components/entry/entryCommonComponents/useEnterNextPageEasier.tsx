import React from "react";
import { nextStep } from "../../store/headerProgressBarSlice";
import { useAppDispatch } from "../../../hook";
import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

export default function useEnterNextPageEasier<T extends FieldValues>() {
    const dispatch = useAppDispatch()
    return (event: React.KeyboardEvent<HTMLFormElement>, isValid: boolean, handleSubmit: UseFormHandleSubmit<T>, onSubmit: (data: T) => void): void => {
        if (event.key === "Enter" && isValid) {
            handleSubmit(onSubmit)();
            dispatch(nextStep())
        }
    }
};
