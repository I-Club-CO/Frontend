
export default function useEnterNextPageEasier () {
    return (event, isValid, handleSubmit, onSubmit) => {
        if (event.key === "Enter" && isValid) {
            handleSubmit(onSubmit)();
        }
    }
};