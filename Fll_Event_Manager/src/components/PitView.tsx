import React from "react";
import ClientClock from "./ClientClock";
import MatchCounter from "./MatchCounter";
//import "./ControlButtons.css";

const PitView = () => {
    return(
        <div>
            <h1>Pit view</h1>
            <ClientClock></ClientClock>
            <MatchCounter></MatchCounter>
        </div>
    )
}

export default PitView;