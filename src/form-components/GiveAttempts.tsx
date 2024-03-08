import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Last } from "react-bootstrap/esm/PageItem";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [newAttempts, setNewAttempts] = useState<string>("");
    const lastAttempts = parseInt(newAttempts) || 0;

    function useAttempts(): void {
        setAttempts(attempts - 1);
    }
    function gainAttempts(): void {
        setAttempts(attempts + lastAttempts);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <h3>Number of Attempts Left: {attempts}</h3>
            <Form.Control
                type="number"
                value={newAttempts}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setNewAttempts(event.target.value)
                }
            />
            <Button onClick={useAttempts} disabled={attempts === 0}>
                USE
            </Button>
            <Button onClick={gainAttempts} disabled={attempts === 0}>
                GAIN
            </Button>
        </div>
    );
}
