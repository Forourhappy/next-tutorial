import classes from './logistics-item.module.css';
import {ReactNode} from 'react';

interface PropsType {
  icon: ReactNode;
}

function LogisticsItem(props: PropsType) {
  const {icon: Icon} = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon/>
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
