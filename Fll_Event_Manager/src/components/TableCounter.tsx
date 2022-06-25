import React from "react";
import { useState, useEffect } from 'react';

const TableCounter = () => {
    const [tables, setTables] = React.useState(0);



    function getTables() {

        async function start() {
            const res = fetch('/api/tables', {
                method: 'GET',
            }).then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw Error(res.statusText);
                }
            }).then(json => {
                console.log(json);
                setTables(json['numTables']);
            })
        }
        start();
    }

    useEffect(() => {
        setInterval(() => {
            getTables();
        }, 5000);
    }, [setTables]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTables(parseInt(event.target.value));
        updateTables(parseInt(event.target.value))
    };

    function updateTables(num:number) {

        async function start() {
            const res = fetch('/api/tables/' + num, {
                method: 'POST',
            }).then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw Error(res.statusText);
                }
            })
        }
        start();
    }

    return (
        <div>
            <h4>Num Tables: {tables}</h4>
            <input type="number" onChange={handleChange}></input>
        </div>
    )

}

export default TableCounter;