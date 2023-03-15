import React from 'react';
import {getAllEvents} from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventsSearch from "@/components/events/EventsSearch";

const EventPage = () => {
  const events = getAllEvents();

  return (
    <>
      <EventsSearch/>
      <EventList items={events}/>
    </>
  );
};

export default EventPage;