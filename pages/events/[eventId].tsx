import React from 'react';

import EventSummary from '@/components/event-detail/EventSummary';
import EventLogistics from '@/components/event-detail/EventLogistics';
import EventContent from '@/components/event-detail/EventContent';
import {GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, InferGetStaticPropsType} from 'next';
import {getEventById, getFeaturedEvents} from '@/utils/apiUtil';
import {EventType} from '@/types/events/EventTypes';

const EventDetailPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const event = props.selectedEvent;

  // if (!event) {
  //   return <p>이벤트를 찾을 수 없습니다.</p>;
  // }

  if (!event) {
    return (
      <div className="center">
        <p>로딩 중...</p>
      </div>
    );
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

export const getStaticProps = async (context: GetStaticPropsContext):
  Promise<GetStaticPropsResult<{ selectedEvent: EventType | undefined }>> => {

  if (!context.params) {
    return <p>로딩 중...</p>;
  }

  const eventId = context.params.eventId as string | undefined;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event
    },
    revalidate: 30

  };
};


export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  // 모든 페이지를 사전에 렌더링하는 것은 페이지 수가 많아진다면 비효율적.
  // 사람들의 방문율에 상관있는 이벤트만 미리 페칭해 두는 편이 더 낫다.
  // const events = await getAllEvents();

  const events = await getFeaturedEvents();

  const paths = events.map(event => ({params: {eventId: event.id}}));

  return {
    paths: paths,
    // 모든 페이지를 지정해 줬으면 false(allEvents를 불러왔다면),
    // 만약 다른 경로로 페이지를 로드해야 한다면 true(featuredEvents를 불러왔다면)
    // 또는 blocking을 이용해서 로딩 메시지가 뜨지 않게 할 수 있다.
    // 화면이 자주 바뀌고 로딩시간이 짧다면 blocking이 더 좋을 것 같다.
    fallback: 'blocking'
  };
};

export default EventDetailPage;