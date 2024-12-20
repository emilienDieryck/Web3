import React from "react";
import { StatisticLine } from "../Display/StatisticLine";

export const Statistics = ({ good, neutral, bad, all , average , positivePercentage}) => {
    return (
        <table>
            <tbody>
                <StatisticLine text={"good"} value={good} />
                <StatisticLine text={"neutral"} value={neutral} />
                <StatisticLine text={"bad"} value={bad} />
                <StatisticLine text={"all"} value={all} />
                <StatisticLine text={"average"} value={average.toFixed(2) + " %"} />
                <StatisticLine text={"positive"} value={positivePercentage.toFixed(2) + " %"} />
            </tbody>
        </table>
    );
};
