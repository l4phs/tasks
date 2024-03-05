import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [answer, toggleAnswer] = useState(false);

    return (
        <span>
            <Button onClick={() => toggleAnswer(!answer)}>
                {" "}
                Reveal Answer
            </Button>
            {answer === true && <h2> 42 </h2>}
        </span>
    );
    //return <div>Reveal Answer</div>;
}
