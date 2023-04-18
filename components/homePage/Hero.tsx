import React from 'react';
import classes from '@/styles/homePage/hero.module.css'
import Image from "next/image";

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src='/images/site/라이언 기타.jfif'
                    alt='주인장 사진'
                    width={300}
                    height={300}
                />
            </div>
            <h1>안녕하세요. FOH입니다.</h1>
            <p>이곳은 Next.js와 TypeScript를 연습하기 위한 프로젝트입니다.</p>
        </section>
    );
};

export default Hero;
