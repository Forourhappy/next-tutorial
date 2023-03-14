import Link from "next/link";

import classes from '@/components/ui/button.module.css'

const Button = <T, >(props: T) => {
    return (
        <Link href={props.link} className={classes.btn}>
            {props.children}
        </Link>
    );
};

export default Button;