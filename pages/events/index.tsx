import React from 'react';
import {getFeaturedEvents} from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventsSearch from '@/components/events/EventsSearch';
import {useRouter} from 'next/router';
import {InferGetStaticPropsType} from 'next';


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

export const getStaticProps = () => {
  const featuredEvents = getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    }
  };
};

export default AllEventPage;