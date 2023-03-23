import React from 'react';
import {useRouter} from "next/router";

const Level = () => {
    const router = useRouter();
    const query = router.query
    return (
        <div>
            안녕하세요. {query.id} 유저님.<br/>
            당신의 레벨은 {query.level}입니다.
        </div>
    );
};

export default Level;