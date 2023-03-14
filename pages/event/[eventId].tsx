import React from 'react';
import {useRouter} from "next/router";
import {getEventById} from "@/dummy-data";
import EventSummary from "@/components/event-detail/EventSummary";
import EventLogistics from "@/components/event-detail/EventLogistics";
import EventContent from "@/components/event-detail/EventContent";

const EventDetailPage = () => {
    const router = useRouter();

    const eventId = router.query.eventId as string | undefined;
    const event = getEventById(eventId);
    if (!event) {
       return <p>이벤트를 찾을 수 없습니다.</p>
    }
    return (
        <>
            <EventSummary title={event.title}/>
            <EventLogistics date={event.date}/>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    );
};

export default EventDetailPage;