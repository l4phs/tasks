import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswerInput">
                <Form.Label>Short Answer: </Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
                {answer === expectedAnswer && <h2> ✔️ </h2>}
                {answer !== expectedAnswer && <h2> ❌ </h2>}
            </Form.Group>
        </div>
    );
}
