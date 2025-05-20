import React from "react";
import { Spinner } from "./Spinner";


export default function Loading() {
    return(
        <React.Fragment>
            <Spinner />
            <span className="pl-1.5">Loading...</span>
        </React.Fragment>
    )
}