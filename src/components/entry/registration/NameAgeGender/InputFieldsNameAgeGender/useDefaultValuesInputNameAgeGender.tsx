import { useEffect } from "react";
import { UseFormSetValue } from "react-hook-form";
import { FormValues } from "./InputFieldsNameAgeGender";

interface InputValuesProps {
    username: string
    birthday: number
    setValue: UseFormSetValue<FormValues>
}

const useDefaultValuesInputNameAgeGender = ({username, birthday, setValue}: InputValuesProps) => {
    useEffect(() => {
        if (username) setValue("username", username)
        if (birthday) setValue("birthday", birthday)
    }, [username, birthday, setValue])
}
export default useDefaultValuesInputNameAgeGender