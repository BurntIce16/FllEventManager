import React, { useRef } from "react";
import { useState, useEffect } from 'react';
import { useTimer } from 'use-timer';


const Timer = () => {

    const [startTimer, setStartTimer] = React.useState(false);
    const [timerRunning, setTimerRunning] = React.useState(false);

    const refStartTimer = useRef(startTimer);
    const refTimerRunning = useRef(timerRunning);

    const { time, start, pause, reset, status } = useTimer({
        initialTime: 300,
        endTime: 0,
        timerType: 'DECREMENTAL',
        interval: 10,
        onTimeOver: () => {
            setTimerRunning(false);
            refTimerRunning.current=false;
            resetTimer();
        },
    });

    function checkStart() {
        async function get() {
            const res = fetch('/api/timer/status', {
                method: 'GET',
            }).then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw Error(res.statusText);
                }
            }).then(json => {
                //console.log(json);
                setStartTimer(json['startTimer']);
                refStartTimer.current=json['startTimer'];
            }).then(() => {
                if (refStartTimer.current == true && refTimerRunning.current == false) {
                    sendStop();
                    start();
                    setStartTimer(false);
                    refStartTimer.current=false;
                    setTimerRunning(true);
                    refTimerRunning.current=true;
                    console.log("start " + startTimer);
                }
            }
            )
        }
        get();
    }

    function sendStop() {
        async function stop() {
            const res = fetch('/api/timer/stop', {
                method: 'POST',
            }).then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw Error(res.statusText);
                }
            }).then(json => {
                //console.log(json);
            })
        }
        stop();
    }

    useEffect(() => {
        setInterval(() => {
            checkStart();
        }, 5000);
    }, [checkStart]);

    function resetTimer(){
        //blink timer and play sound
        setTimeout(function(){
            reset();
        }, 3000)
    }



    return (
        <>
            <p>Time remaining: {time}</p>
            {status === 'RUNNING' && <p>Running...</p>}
        </>
    );
}

export default Timer;