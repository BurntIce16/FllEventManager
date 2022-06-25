import React from "react";
import { useState, useEffect } from 'react';
import MatchCounter from "./MatchCounter";

const MatchConfigButton = () => {

    const [currentMatch, setCurrentMatch] = React.useState(0);
    const [newMatch, setNewMatch] = React.useState(0);

    function updateMatch() {

        async function start() {
            const res = fetch('/api/match/' + newMatch, {
                method: 'POST',
            }).then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw Error(res.statusText);
                }
            }).then(json => {
                console.log(json);
                setNewMatch(json['match']);
            })
        }
        start();
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewMatch(parseInt(event.target.value));
      };



    return (
        <div>
            <MatchCounter></MatchCounter>
            <h3>New Match #{newMatch}</h3>
            <input type="number" value={newMatch} onChange={handleChange}></input>
            <button onClick={updateMatch}>Update Match Number</button>
        </div>
    )

}

export default MatchConfigButton;