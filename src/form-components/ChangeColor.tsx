import React, { useState } from "react";
//need to update
export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState("red"); // Set the initial color

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
        </div>
    );
}
