import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [value, setValue] = useState<number>(4);
    const [quizProgress, setQuizProgress] = useState(false);
    //create 3 functions to handle state
    function startQuiz() {
        if (value > 0) {
            setQuizProgress(true);
            setValue(value - 1);
        } else if (value == 0) {
            setQuizProgress(false);
        }
    }
    function stopQuiz() {
        setQuizProgress(false);
    }
    function mulligan() {
        setValue(value + 1);
    }
    return (
        <span>
            <p>{value}</p>
            <Button onClick={startQuiz} disabled={quizProgress || value === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!quizProgress}>
                {" "}
                Stop Quiz{" "}
            </Button>
            <Button onClick={mulligan} disabled={quizProgress}>
                Mulligan
            </Button>
        </span>
    );
}
