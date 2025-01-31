import { setProcessType } from "../../store/headerProgressBarSlice";
import { useAppDispatch } from "../../../hook";

const useHandleStart = () => {
    const dispatch = useAppDispatch();

    const handleRegistrationStart = (): void => {
        dispatch(
            setProcessType({ processType: "registration", totalSteps: 6 })
        );
    };

    const handleLoginStart = (): void => {
        dispatch(setProcessType({ processType: "login", totalSteps: 2 }));
    };


    return { handleRegistrationStart, handleLoginStart };
};

export default useHandleStart;
