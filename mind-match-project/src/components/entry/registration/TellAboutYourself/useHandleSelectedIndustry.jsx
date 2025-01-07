export default function useHandleSelectedIndustry(setSelectedIndustry, setValue, trigger, closeModal) {
    return (industry) => {
        setSelectedIndustry(industry);
        setValue("industry", industry);
        trigger("industry");
        closeModal();
    };
}
