import React from "react";
import { useState, useEffect } from 'react';

const MatchCounter = () => {

    const [match, setMatch] = React.useState(0);



    function updateMatch() {

        async function start() {
            const res = fetch('/api/match', {
                method: 'GET',
            }).then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw Error(res.statusText);
                }
            }).then(json => {
                console.log(json);
                setMatch(json['match']);
            })
        }
        start();
    }

        useEffect(() => {
            setInterval(() => {
                updateMatch();
            }, 1000);
        }, [setMatch]);

        return (
            <div className="MatchCounter">
                <h2>Match #{match}</h2>
            </div>
        )


    }

    export default MatchCounter;