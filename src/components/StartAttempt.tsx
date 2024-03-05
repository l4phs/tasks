import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [value, setValue] = useState<number>(4);
    const [quizProgress, setQuizProgress] = useState(false);
    //create 3 functions to handle state
    function startQuiz() {
        setQuizProgress(true);
        setValue(value - 1);
    }
    function stopQuiz() {
        setQuizProgress(false);
    }
    function mulligan() {
        setValue(value + 1);
    }
    return (
        <span>
            <Button onClick={startQuiz}>Start Quiz</Button>
            to {value}.{setQuizProgress(true)}
            <Button onClick={stopQuiz}> Stop Quiz</Button>
            {quizProgress === true && value === 0}
            <Button onClick={mulligan}>Mulligan</Button>
            to {value}.
        </span>
    );
}
