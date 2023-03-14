import Head from 'next/head'
import {DataType, getFeaturedEvents} from "@/dummy-data";
import EventList from "@/components/events/EventList";
import {Html} from "next/document";

function HomePage() {
    const featuredEvents: DataType[] = getFeaturedEvents();
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div>
                <ul>
                    <EventList items={featuredEvents}/>
                    {/*<li><Link href="/user">유저 리스트</Link></li>*/}
                    {/*<li><Link href="/blog">블로그</Link></li>*/}
                </ul>
            </div>
        </>
    )
}

export default HomePage