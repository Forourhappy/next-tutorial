import {PropsWithChildren} from "react";
import MainHeader from "@/practiceComponents/layout/MainHeader";

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