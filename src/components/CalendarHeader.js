import React, {useContext} from 'react';
import dayjs from 'dayjs';
import logo from '../assets/logo.png';
import styled from 'styled-components';
import GlobalContext from '../context/GlobalContext';

const Header = styled.header`
    display: flex;
    margin: auto 0;
`;

const CalendarHeader = () => {

    //header 에서 먼저 바뀌고 
    const {monthIndex, setMonthIndex} = useContext(GlobalContext);

    const handlePrevMonth = () => {
        setMonthIndex(monthIndex - 1);
    }

    const handleNextMonth = () => {
        setMonthIndex(monthIndex + 1);
    }

    const handleResetMonth = () => {
        setMonthIndex(dayjs().month());
    }

    return (
        <Header>
            <img style={{width:'50px',height:'50px'}} src={logo} alt="calendar"/>
            <h1>
                Calendar
            </h1>
            <button onClick={handleResetMonth} style={{width:'70px',height:'50px'}}>
                이번달
            </button>
            <button onClick={handlePrevMonth} style={{width:'70px',height:'50px'}}>
                <span>
                    이전달
                </span>
            </button>
            <button onClick={handleNextMonth} style={{width:'70px',height:'50px'}}>
                <span>
                    다음달
                </span>
            </button>
            <h2>
                {dayjs(new Date(dayjs().year(), monthIndex)).format('YYYY MMMM')}
            </h2>
            
        </Header>
    );
};

export default CalendarHeader;