import React from "react";
import {
    getCustomHour,
    getCustomMinute,
    getCustomSecond,
} from "@hirishu10/simple-date-time";
import { useState, useEffect } from 'react';

const ClientClock = () => {
    const [hour, setHour] = React.useState(getCustomHour());
    const [minute, setMinute] = React.useState(getCustomMinute());
    const [second, setSecond] = React.useState(getCustomSecond());

    useEffect(() => {
        setInterval(() => {
            updateTime();
        }, 500);
    }, [setSecond]);


    function updateTime(){
        setSecond(getCustomSecond());
        setMinute(getCustomMinute());
        setHour(getCustomHour());
    }


    return (
        <div className='clock'>
            <p>{hour}:{minute}:{second}</p>
        </div>
    )
}

export default ClientClock;