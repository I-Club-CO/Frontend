import { useDispatch, useSelector } from "react-redux";

export const useData = (selector, action) => {
    const dispatch = useDispatch(),
        data = useSelector(selector);

    const handleChange = (event) => {
        dispatch(action(event.target.value));
    };
    return [data, handleChange];
};
