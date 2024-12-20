import React from "react";
import { Value } from "../Display/Value";

export const Statistics = ({ good, neutral, bad, all , average , positivePercentage}) => {
    return (
        <div>
        <Value text={"good"} value={good} />
        <Value text={"neutral"} value={neutral} />
        <Value text={"bad"} value={bad} />
        <Value text={"all"} value={all} />
        <Value text={"average"} value={average.toFixed(2) + " %"} />
        <Value text={"positive"} value={positivePercentage.toFixed(2) + " %"} />
        </div>
    );
};
