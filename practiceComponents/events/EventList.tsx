import React from 'react';
import EventItem from '@/practiceComponents/events/EventItem';
import classes from './event-list.module.css';
import {EventType} from '@/types/events/EventTypes';

const EventList = (props: { items: EventType[] }) => {
    const {items} = props;
    return (
        <ul className={classes.list}>
            {items.map(event => <EventItem key={event.id} eventProps={event}/>)}
        </ul>
    );
};

export default EventList;