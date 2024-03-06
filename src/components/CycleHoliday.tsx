/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<holidayType>("🍀");
    type holidayType = "🍀" | "🦃" | "💖" | "🐰" | "🎊";

    function advanceYear(): void {
        setHoliday(
            holiday === "💖"
                ? "🍀"
                : holiday === "🍀"
                ? "🐰"
                : holiday === "🐰"
                ? "🦃"
                : holiday === "🦃"
                ? "🎊"
                : "💖"
        );
    }
    function advanceAlpha(): void {
        setHoliday(
            holiday === "🐰"
                ? "🎊"
                : holiday === "🎊"
                ? "🍀"
                : holiday === "🍀"
                ? "🦃"
                : holiday === "🦃"
                ? "💖"
                : "🐰"
        );
    }

    return (
        <div>
            {" "}
            <Button onClick={advanceAlpha}> Advance By Alphabet </Button>
            <Button onClick={advanceYear}> Advance By Year </Button>
            Holiday: {holiday}{" "}
        </div>
    );
}
