import { useDispatch } from "react-redux";
import { setProcessType } from "../../store/headerProgressBarSlice";

const useHandleStart = () => {
    const dispatch = useDispatch();

    const handleRegistrationStart = () => {
        dispatch(
            setProcessType({ processType: "registration", totalSteps: 6 })
        );
    };

    const handleLoginStart = () => {
        dispatch(setProcessType({ processType: "login", totalSteps: 2 }));
    };

    return { handleRegistrationStart, handleLoginStart };
};

export default useHandleStart;
