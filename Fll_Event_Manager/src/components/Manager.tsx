import React, { useState } from "react";
import MatchConfigButton from "./MatchConfigButton";


const Manager = () => {

    const [timerStart, setTimerStart] = useState(false);
    
    return(
        <div>
            <h1>Manager</h1>
            <MatchConfigButton></MatchConfigButton>
        </div>
    )
}




export default Manager;