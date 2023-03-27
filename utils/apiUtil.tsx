import {EventType} from '@/types/events/EventTypes';

export const getAllEvents = () => {
  let events: EventType[] = [];
  fetch('https://next-tutorial-fab2a-default-rtdb.firebaseio.com/events.json')
    .then(res => res.json())
    .then((res: JSON) => {
      events = Object.entries(res).map(([key, val]) => ({
        id: key,
        ...val
      }));
    });
  return events;
};

export const getFeaturedEvent = () => {
  const allEvents = getAllEvents();
  return allEvents.filter(event => event.isFeatured);
};