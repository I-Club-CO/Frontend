export default function handleSelectedIndustry(setSelectedIndustry, setValue, trigger, closeModal) {
    return (industry) => {
        setSelectedIndustry(industry);
        setValue("industry", industry);
        trigger("industry");
        closeModal();
    };
}
