import React, {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import getMonth from '../utils/days';

const SmallCalendar = () => {

    const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
    const [currentmonth, setCurrentMonth] = useState(getMonth());

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIndex));
    }, [currentMonthIndex]);


    return (
        <div>
            
        </div>
    );
};

export default SmallCalendar;