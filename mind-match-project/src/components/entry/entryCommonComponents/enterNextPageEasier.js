
export default function enterNextPageEasier () {
    return (event, isValid, handleSubmit, onSubmit) => {
        if (event.key === "Enter" && isValid) {
            handleSubmit(onSubmit)();
        }
    }
};