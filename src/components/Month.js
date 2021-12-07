import React from 'react';
import Day from './Day';
import styled from 'styled-components';

//column - 7
//row - 5

//여기에 힌트가 있는데 말이야 
// className="flex-1 grid grid-cols-7 grid-rows5"
//세미콜론을 안해줘서 적용이 안되었던거였어 ㅋㅋㅋㅋㅋ 
const MonthStyle = styled.div`
    display: grid;
    grid-template-columns: 1500px;
    grid-template-rows: 130px 130px 130px 130px 130px;
    justify-content: center;
    
`;

const WeekStyle = styled.div`
    display: flex;
    justify-content: center;
    
`;

// const DayStyle = styled.div`
//     width: 100%;
// `;f

const Month = ({month}) => {

    console.log('Month.js/month : ' + month + ',' + month.length);//length : 5

    return (
        <MonthStyle>
            {
                month.map((row, i) => {
                    return <WeekStyle key={i}>
                        {
                            row.map((day, idx) => {//일월화수목금토 주 단위 
                                return <Day day={day} key={idx} rowIdx={i}/>
                            })
                        }
                    </WeekStyle>
                })
            }
        </MonthStyle>
    );
};

export default Month;