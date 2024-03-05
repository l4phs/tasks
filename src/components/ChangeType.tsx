import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question"
    );
    const toggleClick = () => {
        setQuestion((prevType) =>
            prevType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    };
    //first segmentis the button, second segment determines the state change of the
    //button
    return (
        <span>
            <Button onClick={toggleClick}> Change Type</Button>
            {question === "short_answer_question" && (
                <p>This is a short answer question</p>
            )}
            {question === "multiple_choice_question" && (
                <p>This is a multiple choice question</p>
            )}
        </span>
    );
}
