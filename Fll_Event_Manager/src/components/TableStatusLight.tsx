import React from "react";
import { useState, useEffect } from 'react';

interface data {
    status: boolean;
}

const TableStatusLight = (props:data) => {
    const [isReady, setIsReady] = React.useState("not ready");

    useEffect(() => {
        updateStatus();
     });

    function updateStatus(){
        if(props.status === true){
            setIsReady("ready");
        }else{
            setIsReady("not ready");
        }
    }



    return(
        <p>Table status: {isReady}</p>
    )

}


export default TableStatusLight;