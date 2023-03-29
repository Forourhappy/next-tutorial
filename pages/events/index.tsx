import React from 'react';

import EventList from '../../components/events/EventList';
import EventsSearch from '@/components/events/EventsSearch';
import {useRouter} from 'next/router';
import {GetStaticPropsResult, InferGetStaticPropsType} from 'next';
import {EventType} from '@/types/events/EventTypes';
import {getAllEvents} from '@/utils/apiUtil';


const AllEventPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const findEventsHandler = (year: string, month: string) => {
    const url = `/events/${year}/${month}`;
    router.push(url).then();
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={props.events}/>
    </>
  );
};

export const getStaticProps = async (): Promise<GetStaticPropsResult<{ events: EventType[] }>> => {
  const events = await getAllEvents();
  return {
    props: {
      events
    },
    revalidate: 60
  };
};

export default AllEventPage;