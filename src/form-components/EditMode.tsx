import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isAStudent, setStudent] = useState<boolean>(true);

    function updateEdit(): void {
        setEditMode(!editMode);
    }
    function updateStudent(): void {
        setStudent(!isAStudent);
    }
    function updateUserName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode"
                checked={editMode}
                onChange={updateEdit}
            />
            {editMode ? (
                <div>
                    <Form.Control
                        type="text"
                        value={userName}
                        onChange={updateUserName}
                    />
                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="Are you a Student?"
                        checked={isAStudent}
                        onChange={updateStudent}
                    />
                </div>
            ) : (
                <p>
                    {userName} is
                    {isAStudent ? " a student" : " not a student"}
                </p>
            )}
        </div>
    );
}
