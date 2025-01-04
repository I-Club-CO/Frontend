import { useForm } from "react-hook-form";
export const useRegForm = (defaultValues = {}) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch,
        reset,
    } = useForm({ defaultValues, mode: "onChange" });
    return { register, handleSubmit, errors, isValid, watch, reset };
};
