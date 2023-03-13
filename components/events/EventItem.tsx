import React from 'react';
import {DataType} from "@/dummy-data";
import classes from "./event-item.module.css";
import Button from "@/components/ui/button";
import DateIcon from "@/components/icons/date-icon";


const EventItem = (props: { eventProps: DataType }) => {
    const {title, image, date, location, id} = props.eventProps;

    const humanReadableDate = new Date(date).toLocaleDateString('kr-KR', {
        day: 'numeric',
        month: "long",
        year: "numeric"
    })

    const formattedAddress = location.replace(', ', '\n');

    return (
        <li className={classes.item}>
            <img src={image} alt=""/>
            <div className={classes.content}>
                <div><h2>{title}</h2></div>
                <div className={classes.date}>
                    <DateIcon/>
                    <time>{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                    <address>{formattedAddress}</address>
                </div>
                <div className={classes.actions}>
                    <Button link={`/events/${id}`}>이벤트 이동</Button>
                </div>
            </div>
        </li>
    );
};

export default EventItem;