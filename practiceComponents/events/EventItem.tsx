import React from 'react';
import classes from './event-item.module.css';
import Button from '@/practiceComponents/ui/button';
import DateIcon from '@/practiceComponents/icons/date-icon';
import AddressIcon from '@/practiceComponents/icons/address-icon';
import ArrowRightIcon from '@/practiceComponents/icons/arrow-right-icon';
import {EventType} from '@/types/events/eventTypes';
import Image from 'next/image';


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
      {/*Next에 최적화된 img 표현 태그*/}
      {/*이미지의 용량, 인코딩 방식 최적화*/}
      {/*컴포넌트가 보일 때에만 이미지를 request*/}
      <Image src={image} alt={title} width={240} height={160}/>
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