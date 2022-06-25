import React from "react";
import { useState, useEffect } from 'react';
import TableStatusLight from "./TableStatusLight";

const TableStatus = () => {

    const [tableStatus, setTableStatus] = React.useState([false]);
    const [numTables, setNumTables] = React.useState(4);

    function getTables() {

        async function start() {
            const res = fetch('/api/tables/status', {
                method: 'GET',
            }).then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw Error(res.statusText);
                }
            }).then(json => {
                //console.log(json);
                setTableStatus(json['tables']);
                setNumTables(json['numTables']);
            })
        }
        start();
    }

    useEffect(() => {
        setInterval(() => {
            getTables();
        }, 5000);
    }, [setNumTables]);


    function createTableLight(value: boolean, index: number, array: boolean[]): JSX.Element {
        return <TableStatusLight status={value}></TableStatusLight>
    }

    function createTableLights(tables: boolean[]): JSX.Element[] {
        return tables.map(createTableLight);
    }




    return (
        <div>
            <p>TableStatus</p>
            {createTableLights(tableStatus)}
        </div>
    )

}


export default TableStatus;