import React from 'react';
import {getAllEvents} from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventsSearch from "@/components/events/EventsSearch";
import {useRouter} from "next/router";


const AllEventPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  const findEventsHandler = (year: string, month: string) => {
    const url = `/events/${year}/${month}`
    router.push(url).then();
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={events}/>
    </>
  );
};

export default AllEventPage;