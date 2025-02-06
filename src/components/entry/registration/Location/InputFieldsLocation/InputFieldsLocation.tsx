import React, { useEffect } from "react";
import InputField from "../../../entryCommonComponents/InputField/InputField";
import useOnSubmitLocation from "../useOnSubmitLocation";
import Button from "../../../entryCommonComponents/Button/Button";
import useDefaultValuesInputLocation from "./useDefaultValuesInputLocation";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../../../../hook";

export interface FormValues {
    city: string
    country: string
}

function InputFieldsLocation() {
    const { register, formState: {errors, isValid}, handleSubmit, setValue, trigger } = useForm<FormValues>({defaultValues: {}, mode: "onChange"}),
        { city, country } = useAppSelector((state) => state.registrationData);

    const handleOnSubmit = useOnSubmitLocation(),
        onSubmit = (data: FormValues) => {
            handleOnSubmit(data);
        };

    useDefaultValuesInputLocation({ city, country, setValue });

    useEffect(() => {
        trigger()
    }, [city, country, trigger])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputField<FormValues, "city">
                name="city"
                text="City:"
                placeholder="City..."
                register={register}
                validationRules={{
                    required: "City is required.",
                    pattern: {
                        value: /^[A-Za-zА-Яа-яЁё]{3,}$/,
                        message: "At least 3 letters.",
                    },
                }}
                errors={errors.city}
            />
            <InputField<FormValues, "country">
                name="country"
                text="Country:"
                placeholder="Country..."
                register={register}
                validationRules={{
                    required: "Country is required.",
                    pattern: {
                        value: /^[A-Za-zА-Яа-яЁё]{4,}$/,
                        message: "At least 4 letters.",
                    },
                }}
                errors={errors.country}
            />
            {/* Здесь должна находиться интерактивная карта */}
            <Button type="submit" text="Next" disabled={!isValid} />
        </form>
    );
}

export default InputFieldsLocation;
