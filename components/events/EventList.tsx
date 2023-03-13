import React from 'react';
import EventItem from "@/components/events/EventItem";
import {DataType} from "@/dummy-data";
import classes from "./event-list.module.css";

const EventList = (props: { items: DataType[] }) => {
    const {items} = props
    return (
        <ul className={classes.list}>
            {items.map(event => <EventItem key={event.id} eventProps={event}/>)}
        </ul>
    );
};

export default EventList;