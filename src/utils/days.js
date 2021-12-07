import dayjs from 'dayjs';

const getMonth = (month = dayjs().month()) => {

    const year = dayjs().year();

    //const month = dayjs().month()
    //이거 때문에 아무리 달 바꾸는 버튼을 눌러봤자지 ㅅㅂ 

    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();//이걸 조정하니 첫번째 요일이 바쒼다. 

    console.log('days.js/year : ' + year); //2021
    console.log('days.js/month : ' + month); //11
    console.log('days.js/firstDayOfTheMonth : ' + firstDayOfTheMonth);//1

    let currentMonthCount = 0 - firstDayOfTheMonth;

    console.log('days.js/currentMonthCount : ' + currentMonthCount); // -1 

    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {

            currentMonthCount++;

            return dayjs(new Date(year, month, currentMonthCount));
        });
    });

    console.log('getMonth daysMatrix : ' + daysMatrix);

    return daysMatrix;
}

export default getMonth;