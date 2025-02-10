import { useEffect, useState } from "react";



export default function useTimer(initialValue = 0) {

    const [timer, setTimer] = useState(initialValue)
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (timer > 0) {
            interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
        }
        return () => clearInterval(interval);
    }, [timer, setTimer]);

    const startTimer = (duration: number) => setTimer(duration)
    return {timer, startTimer}
}
