import type {AppProps} from 'next/app';
import Layout from '@/practiceComponents/layout/Layout';
import '@/styles/global.css';
import Head from 'next/head';
// 루트 컴포넌트
// 레이아웃 컴포넌트로 컴포넌트를 감싸면 header를 추가하기 용이함
export default function App({Component, pageProps}: AppProps) {
    return (
        <Layout>
            {/*모든 페이지에 적용하고 싶은 부분들은 이곳에다가*/}
            <Head>
                {/*title 태그나 name이 있는 meta 태그는 중복될 경우 최신의 것만 적용.*/}
                {/*이를 통해서 디폴트 값을 정해줄 수 있다.*/}
                <title>Next Events</title>
                <meta name="description" content="NextJS Events"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}