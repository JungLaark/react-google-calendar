import React, {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import getMonth from '../utils/days';

const SmallCalendar = () => {

    const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIndex));
    }, [currentMonthIndex]);

    const handlePrevMonth = () => {
        setCurrentMonthIndex(currentMonthIndex - 1);

    };

    const handleNextMonth = () => {
        setCurrentMonthIndex(currentMonthIndex + 1);
    };


    return (
        <div>
            <header>
                <p>
                    {dayjs(new Date(dayjs().year(), currentMonthIndex)).format("YYYY MMMMMM")}
                </p>
                <button onClick={handlePrevMonth}>
                    <span>
                        왼쪽
                    </span>
                </button>
                <button onClick={handleNextMonth}>
                    <span>
                        오른쪽
                    </span>
                </button>
            </header>
        </div>
    );
};

export default SmallCalendar;