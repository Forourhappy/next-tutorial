import classes from './event-summary.module.css';

interface PropsType {
  title: string;
}

function EventSummary(props: PropsType) {
  const {title} = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;