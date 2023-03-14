import {PropsWithChildren} from "react";
import MainHeader from "@/components/layout/MainHeader";

const Layout = (props: PropsWithChildren) => {
    return (
        <>
            <MainHeader/>
            <main>
                {props.children}
            </main>
        </>
    );
};

export default Layout;