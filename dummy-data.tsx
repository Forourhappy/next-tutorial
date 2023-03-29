import {EventType} from '@/types/events/EventTypes';


const DUMMY_EVENTS: EventType[] = [
  {
    id: 'e1',
    title: 'Programming for everyone',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    location: 'Somestreet 25, 12345 San Somewhereo',
    date: '2022-05-12',
    image: '/images/벚꽃1.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Networking for introverts',
    description:
      'We know: Networking is no fun if you are an introvert person. That\'s why we came up with this event - it\'ll be so much easier. Promised!',
    location: 'New Wall Street 5, 98765 New Work',
    date: '2022-05-30',
    image: '/images/벚꽃2.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Networking for extroverts',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    location: 'My Street 12, 10115 Broke City',
    date: '2023-03-10',
    image: '/images/풀.jpg',
    isFeatured: true,
  },
];


export function getEventById(id: string | undefined) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}