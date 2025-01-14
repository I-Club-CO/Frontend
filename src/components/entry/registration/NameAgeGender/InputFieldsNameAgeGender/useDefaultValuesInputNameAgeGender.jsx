import { useEffect } from "react";

export default function useDefaultValuesInputNameAgeGender({username, birthday, setValue}) {
    useEffect(() => {
        if (username) setValue("username", username)
        if (birthday) setValue("birthday", birthday)
    }, [username, birthday, setValue])
}