import { useEffect } from "react";

export default function useDefaultValuesInputLocation({
    city,
    country,
    setValue,
}) {
    useEffect(() => {
        if (city) setValue("city", city);
        if (country) setValue("country", country);
    }, [city, country, setValue]);
}
