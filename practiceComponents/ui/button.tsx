import Link from 'next/link';

import classes from '@/practiceComponents/ui/button.module.css';
import {MouseEventHandler, ReactNode} from 'react';

type PropsType = {
    children?: ReactNode;
    link?: string;
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
    );

};

export default Button;