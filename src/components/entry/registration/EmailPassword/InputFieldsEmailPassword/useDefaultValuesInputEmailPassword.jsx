import { useEffect } from "react";

export default function useDefaultValuesInputEmailPassword({email, decryptedPassword, setValue}) {
    useEffect(() => {
        if (email) setValue("email", email, { shouldDirty: false });
        if (decryptedPassword) setValue("password", decryptedPassword, { shouldDirty: false });
    }, [email, decryptedPassword, setValue])
} 