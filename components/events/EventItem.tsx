import React from 'react';
import classes from './event-item.module.css';
import Button from '@/components/ui/button';
import DateIcon from '@/components/icons/date-icon';
import AddressIcon from '@/components/icons/address-icon';
import ArrowRightIcon from '@/components/icons/arrow-right-icon';
import {EventType} from '@/types/events/EventTypes';


const EventItem = (props: { eventProps: EventType }) => {
  const {title, image, date, location, id} = props.eventProps;

  const humanReadableDate = new Date(date).toLocaleDateString('kr-KR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedAddress = location.replace(', ', '\n');

  return (
    <li className={classes.item}>
      <img src={image} alt=""></img>
      <div className={classes.content}>
        <div><h2>{title}</h2></div>
        <div className={classes.date}>
          <DateIcon/>
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <AddressIcon/>
          <address>{formattedAddress}</address>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>이벤트 이동</span>
            <span className={classes.icon}><ArrowRightIcon/></span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;