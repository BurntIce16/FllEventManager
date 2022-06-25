import React from "react";
import MatchCounter from "./MatchCounter";
import TableStatus from "./TableStatus";
import Timer from "./Timer";


const ProjectedView = () => {
    return(
        <div>
            <h1>Main view</h1>
            <Timer></Timer>
            <MatchCounter></MatchCounter>
            <TableStatus></TableStatus>

        </div>
    )
}



export default ProjectedView;