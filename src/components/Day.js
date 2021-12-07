import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';

// className="border border-gray-200 flex flex-col"
const DayStyle = styled.div`
    border: 1px solid black;
    width: 100%;
`;

const Day = ({day, rowIdx}) => {

    console.log(day.format('YYYY-MM-DD'));

    const getCurrentDayClass = () => {
        return day.format('YY-MM-DD') === dayjs().format('YY-MM-DD')
        ? SelectedDayStyle : '';
    }

    console.log('Day.js/day : ' + day + ',' + day.format('ddd') + ',' + day.format('DD'));//1641049200000,Sun,02
    console.log('Day.js/rowIdx : ' + rowIdx);//0~4

    return (
        <DayStyle> 
            <header>
                {rowIdx === 0 && (
                    <p>{day.format("ddd").toUpperCase()}</p>
                )}
                <p className={`${getCurrentDayClass()}`}>{day.format("DD")}</p>
            </header>
        </DayStyle>
    );
};


const SelectedDayStyle = styled.div`
    border-radius:50%;
    background:#00d3d3;
`;

export default Day;