import React from 'react';
import Logo from "@/components/layout/Logo";
import Link from "next/link";
import classes from '@/styles/layout/mainNavigation.module.css'

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <Link href='/'>
                <Logo/>
            </Link>
            <nav>
                <ul>
                    <li><Link href='/posts'>Posts</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
