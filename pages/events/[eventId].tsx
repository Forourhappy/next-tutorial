import React from 'react';

import EventSummary from '@/components/event-detail/EventSummary';
import EventLogistics from '@/components/event-detail/EventLogistics';
import EventContent from '@/components/event-detail/EventContent';
import {GetStaticPropsContext, InferGetStaticPropsType} from 'next';
import {getAllEvents, getEventById} from '@/utils/apiUtil';

const EventDetailPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const event = props.selectedEvent;

  if (!event) {
    return <p>이벤트를 찾을 수 없습니다.</p>;
  }
  return (
    <>
      <EventSummary title={event.title}/>
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event
    }
  };
};


export const getStaticPaths = async () => {
  const events = await getAllEvents();

  const

  return {
    paths: [
      { params: {
        eventId:
        }}
    ]
  }
}

export default EventDetailPage;