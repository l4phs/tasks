import React, { useState } from "react";
import { Form } from "react-bootstrap";
//need to update
export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>("red"); // Set the initial color

    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "yellow",
        "magenta",
        "black"
    ];

    const handleColorChange = (color: string) => {
        setSelectedColor(color === selectedColor ? "on" : color); // Always set to 'on' on button click
    };
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <div key={color} className="form-check-inline">
                    <Form.Check
                        inline
                        type="radio"
                        id={`color-${color}`}
                        name="color"
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => handleColorChange(color)}
                        className="form-check-input"
                    />
                    <label
                        htmlFor={`color-${color}`}
                        style={{ backgroundColor: color }}
                    >
                        {color}
                    </label>
                </div>
            ))}
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: selectedColor }}
                >
                    {selectedColor}
                </span>
            </div>
        </div>
    );
}
