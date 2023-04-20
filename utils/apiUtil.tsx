import {EventType} from '@/types/events/eventTypes';

export const getAllEvents = async () => {
  let events: EventType[];
  const response = await fetch('https://next-tutorial-fab2a-default-rtdb.firebaseio.com/events.json');
  const data: object = await response.json();
  events = Object.entries(data).map(([key, val]) => ({
    id: key,
    ...val
  }));
  return events;
};

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter(event => event.isFeatured);
};

export const getEventById = async (id: string | undefined) => {
  const allEvents = await getAllEvents();
  return allEvents.find(event => event.id === id);
};

export const getFilteredEvents = async (dateFilter: { year: number, month: number }) => {
  const {year, month} = dateFilter;

  const allEvents = await getAllEvents();

  const filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
};