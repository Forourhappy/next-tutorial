import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './LogisticsItem';
import classes from './event-logistics.module.css';
import Image from 'next/image';

interface PropsType {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

function EventLogistics(props: PropsType) {
  const {date, address, image, imageAlt} = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`${image}`} alt={imageAlt} width={300} height={300}/>
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
