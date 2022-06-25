import React, { useState } from "react";
import MatchConfigButton from "./MatchConfigButton";
import MatchUploader from "./MatchUploader";
import TableCounter from "./TableCounter";


const Manager = () => {

    const [timerStart, setTimerStart] = useState(false);
    
    return(
        <div>
            <h1>Manager</h1>
            <MatchConfigButton></MatchConfigButton>
            <MatchUploader></MatchUploader>
            <TableCounter></TableCounter>
        </div>
    )
}




export default Manager;