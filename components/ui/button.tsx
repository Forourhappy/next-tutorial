import Link from "next/link";

import classes from '@/components/ui/button.module.css'
import {UrlObject} from "url";
import {MouseEventHandler, ReactNode} from "react";

type PropsType = {
  children?: ReactNode;
  link?: UrlObject;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
const Button = (props: PropsType) => {
  if (props.link) {
    return (
      <Link href={props.link} className={classes.btn}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  )

};

export default Button;