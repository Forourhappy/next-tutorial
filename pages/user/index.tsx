import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

const Index = (a: string) => {
    const router = useRouter();
    const id = router.query.id
    return (
        <main>
            <h1>유저 목록</h1>
            <ol>
                <li><Link href='user/1'>냥냥이</Link></li>
                <li><Link href='user/2'>멍멍이</Link></li>
            </ol>
        </main>
    );
};

export default Index;