export default function handleChangeTags() {
    return (event, setCheckedTags) => {
        const tag = event.target.value;

        setCheckedTags((prevCheckedTags) =>
            prevCheckedTags.includes(tag)
                ? prevCheckedTags.filter((item) => item !== tag)
                : [...prevCheckedTags, tag]
        );
    };
}
