import { useEffect } from "react";

export default function useDefaultValuesInputTellAboutYourself({industry, info, setValue}) {
    useEffect(() => {
        if (industry) setValue("industry", industry)
        if (info) setValue("info", info)
    }, [industry, info, setValue])
}