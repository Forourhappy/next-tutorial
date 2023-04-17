import React from 'react';
import {useRouter} from "next/router";
import Link from "next/link";

const index = () => {
    const router = useRouter();
    const id = router.query.id
    return (
        <main>
            <div>
                <h2>{id}번 유저님의 페이지</h2>
                <ol>
                    <li><Link href={`${id}/cat`}>고양이</Link></li>
                    <li><Link href={`${id}/dog`}>강아지</Link></li>
                </ol>
            </div>
        </main>
    );
};

export default index;