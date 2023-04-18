import React from 'react';
import MainNavigation from "@/components/layout/MainNavigation";

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <MainNavigation/>
            <main>{children}</main>
        </>
    );
};

export default Layout;
