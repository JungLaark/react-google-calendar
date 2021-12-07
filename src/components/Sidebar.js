import React from 'react';
import CreateEventButton from './CreateEventButton';
import styled from 'styled-components';
import SmallCalendar from './SmallCalendar';

const Aside = styled.aside`
    border: 1px solid black;
    width: 300px;
`;

const Sidebar = () => {
    return (
        <Aside>
            <CreateEventButton/>
            <SmallCalendar/>
        </Aside>
    );
};

export default Sidebar;