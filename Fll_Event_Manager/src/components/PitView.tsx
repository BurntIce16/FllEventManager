import React from "react";
import ClientClock from "./ClientClock";
import MatchCounter from "./MatchCounter";

const PitView = () => {
    return (
        <div className="bg-light h-100 mx-auto fixed-top SetWidth">
            <div className="text-center">
                <ClientClock></ClientClock>
            </div>

            <div className="MatchCounter_Pit">
                <MatchCounter></MatchCounter>
            </div>
        </div>

    )
}

export default PitView;