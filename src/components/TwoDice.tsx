import { getByTestId } from "@testing-library/react";
import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [rightNum, setRightNum] = useState<number>(1);
    const [leftNum, setLeftNum] = useState<number>(2);
    function rollLeftDie(): void {
        setLeftNum(d6());
    }
    function rollRightDie(): void {
        setRightNum(d6());
    }

    const isWin = leftNum === rightNum;
    const isLose = leftNum === 1 && rightNum === 1;

    return (
        <div>
            <span data-testid="left-die">
                <ButtonGroup>
                    <p>{leftNum}</p>
                    <Button onClick={rollLeftDie}>Roll Left</Button>
                </ButtonGroup>
            </span>
            <span data-testid="right-die">
                <ButtonGroup>
                    <p>{rightNum}</p>
                    <Button onClick={rollRightDie}>Roll Right</Button>
                </ButtonGroup>
            </span>
            {isLose && isWin && <p>Lose!</p>}
            {isWin && !isLose && <p>Win!</p>}
        </div>
    );
}
