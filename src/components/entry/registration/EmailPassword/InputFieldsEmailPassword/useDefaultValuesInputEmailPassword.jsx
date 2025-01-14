import { useEffect } from "react";

export default function useDefaultValuesInputEmailPassword({email, decryptedPassword, repeatPassword, setValue}) {
    useEffect(() => {
        if (email) setValue("email", email);
        if (decryptedPassword) setValue("password", decryptedPassword);
        if (repeatPassword) setValue("repeatPassword", repeatPassword);
    }, [email, decryptedPassword, repeatPassword, setValue])
} 