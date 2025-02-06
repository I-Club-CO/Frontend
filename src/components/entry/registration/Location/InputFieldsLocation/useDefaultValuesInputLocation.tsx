import { useEffect } from "react";
import { FormValues } from "./InputFieldsLocation";
import { UseFormSetValue } from "react-hook-form";

interface InputValuesProps {
    city: string
    country: string
    setValue: UseFormSetValue<FormValues>
}

export default function useDefaultValuesInputLocation({
    city,
    country,
    setValue,
}: InputValuesProps) {
    useEffect(() => {
        if (city) setValue("city", city);
        if (country) setValue("country", country);
    }, [city, country, setValue]);
}
