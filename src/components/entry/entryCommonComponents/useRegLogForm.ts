import {
    useForm,
    UseFormReturn,
    FieldValues,
    DefaultValues,
} from "react-hook-form";

export const useRegLogForm = <TFormValues extends FieldValues>(
    defaultValues: DefaultValues<TFormValues> = {} as DefaultValues<TFormValues>,
    mode: "onChange" | "onBlur" = "onChange"
): UseFormReturn<TFormValues> => {
    return useForm<TFormValues>({ defaultValues, mode });
};
