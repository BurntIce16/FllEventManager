import React, { useState } from "react";
//import "./components/StopWatch.scss";
import Timer from "../components/Timer";
import ControlButtons from "../components/ControlButtons";

function StopWatch() {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(15000);

    React.useEffect(() => {
        let interval: any = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time - 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(15000);
    };


    function startStopwatch() {
        async function getStart() {
            try {
                const res = await fetch('/api/timer/start');
                const state = await res.json();
                console.log(state);
                setIsActive(state);
            } catch (error) {
                console.log(error);
            }
        }
        getStart();
    }


    return (
        <div className="stop-watch">
            <Timer time={time} />
            <ControlButtons
                active={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
                handleReset={handleReset}
            />
        </div>
    );


}


export default StopWatch;