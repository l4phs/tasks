import React, { useState } from "react";
import { Button } from "react-bootstrap";
export default CycleHoliday;

export function CycleHoliday(): JSX.Element {
    type Holiday = {
        name: string;
        emoji: string;
    };

    const holidays: Holiday[] = [
        { name: "Christmas", emoji: "🎄" },
        { name: "New Year's Day", emoji: "🎉" },
        { name: "Thanksgiving", emoji: "🦃" },
        { name: "Halloween", emoji: "🎃" },
        { name: "Independence Day", emoji: "🇺🇸" }
    ];

    const CycleHoliday: React.FC = () => {
        const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
            holidays[0]
        );

        function advanceAlphabetically() {
            const currentIndex = holidays.findIndex(
                (holiday) => holiday === currentHoliday
            );
            const nextIndex = (currentIndex + 1) % holidays.length;
            setCurrentHoliday(holidays[nextIndex]);
        }

        function advanceByYear() {
            const sortedByYear = [...holidays].sort((a, b) => {
                const aIndex = holidays.findIndex((holiday) => holiday === a);
                const bIndex = holidays.findIndex((holiday) => holiday === b);
                return aIndex - bIndex;
            });
            const currentIndex = sortedByYear.findIndex(
                (holiday) => holiday === currentHoliday
            );
            const nextIndex = (currentIndex + 1) % holidays.length;
            setCurrentHoliday(sortedByYear[nextIndex]);
        }

        return (
            <div>
                <p>Holiday: {currentHoliday.emoji}</p>
                <Button onClick={advanceAlphabetically}>
                    Advance by Alphabet
                </Button>
                <Button onClick={advanceByYear}>Advance by Year</Button>
            </div>
        );
    };
}
