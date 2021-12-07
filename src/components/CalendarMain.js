import React, {useState, useContext, useEffect} from 'react';
import getMonth from '../utils/days';
import CalendarHeader from './CalendarHeader';
import Sidebar from './Sidebar';
import Month from './Month';
import styled from 'styled-components';
import GlobalContext from '../context/GlobalContext';

const MainStyle = styled.div`
    display:flex; 
`;

const SubStyle = styled.div`
  flex-direction:row;
`;

const CalendarMain = () => {

  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex} = useContext(GlobalContext);

  //TypeError: month.map is not a function
  //이 오류 났었음 

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  },[monthIndex]);

  return (

      <div className={MainStyle}>
        <CalendarHeader/>
        <div style={{display:'flex'}}>
          <Sidebar style={{width: '100px'}}/>
          <Month month={currentMonth}/>
        </div>
      </div>
  );
};

export default CalendarMain; 