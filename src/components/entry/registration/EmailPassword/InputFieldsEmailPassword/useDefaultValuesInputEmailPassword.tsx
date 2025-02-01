import { useEffect } from "react";
import { FormValues } from "./InputFieldsEmailPassword";
import { UseFormSetValue } from "react-hook-form";

interface DefaultValuesParams {
    email: string
    decryptedPassword: string
    setValue: UseFormSetValue<FormValues>
}

const useDefaultValuesInputEmailPassword = ({email, decryptedPassword, setValue}: DefaultValuesParams): void => {
    useEffect(() => {
        if (email) setValue("email", email, { shouldDirty: false });
        if (decryptedPassword) setValue("password", decryptedPassword, { shouldDirty: false });
    }, [email, decryptedPassword, setValue])
} 
export default useDefaultValuesInputEmailPassword