import React from "react";
import InputField from "../../../entryCommonComponents/InputField/InputField";
import { useRegForm } from "../../../entryCommonComponents/useRegLogForm";
import useOnSubmitLocation from "../useOnSubmitLocation";
import Button from "../../../entryCommonComponents/Button/Button";
import { useSelector } from "react-redux";
import useDefaultValuesInputLocation from "./useDefaultValuesInputLocation";

function InputFieldsLocation() {
    const { register, errors, isValid, handleSubmit, setValue } = useRegForm(),
        { city, country } = useSelector((state) => state.registrationData);

    const handleOnSubmit = useOnSubmitLocation(),
        onSubmit = (data) => {
            handleOnSubmit(data);
        };

    useDefaultValuesInputLocation({ city, country, setValue });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
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
            <InputField
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
