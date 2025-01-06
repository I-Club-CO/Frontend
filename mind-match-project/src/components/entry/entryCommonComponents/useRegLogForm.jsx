import { useForm } from "react-hook-form";
export const useRegForm = (defaultValues = {}, mode = "onChange") => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch,
        reset,
        trigger,
        setValue,
    } = useForm({ defaultValues, mode});
    return { register, handleSubmit, errors, isValid, watch, reset, trigger, setValue };
};
