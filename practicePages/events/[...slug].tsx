import React from 'react';
import EventList from '@/practiceComponents/events/EventList';
import ResultsTitle from '@/practiceComponents/events/ResultsTitle';
import Button from '@/practiceComponents/ui/button';
import ErrorAlert from '@/practiceComponents/ui/ErrorAlert';
import {GetServerSidePropsContext, GetServerSidePropsResult, InferGetServerSidePropsType} from 'next';
import {getFilteredEvents} from '@/utils/apiUtil';
import {EventDate, EventType} from '@/types/events/eventTypes';
import Head from 'next/head';

const FilteredEventsPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  // ClientSide render 과정은 이미 익숙하다고 판단해서 스킵하기로 함.

  // const [loadedEvents, setLoadedEvents] = useState();
  // const router = useRouter();
  //
  // const filterData = router.query.slug;
  //
  // const {data, error} = useSWR('https://next-tutorial-fab2a-default-rtdb.firebaseio.com/sales.json');
  //
  // useEffect(() => {
  //   if (data) {
  //     const salesList = Object.entries(data).map(([key, value]) => ({
  //       id: key,
  //       username: value.username,
  //       volume: value.volume
  //     }));
  //   }
  //   setLoadedEvents(events);
  // }, [data]);


  // if (!loadedEvents || !filterData) {
  //   return <p className="center">로딩 중입니다.</p>;
  // }
  //
  // const filteredYear = filterData[0];
  // const filteredMonth = filterData[1];
  //
  //
  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;

  // const filteredEvents = loadedEvents.filter((event) => {
  //   const eventDate = new Date(event.date);
  //   return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  // });

  if (props.hasError) {
    return (
      <>
        <ErrorAlert>
          <p>유효하지 않은 필터입니다. 올바른 값을 입력해주세요.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">All Event 페이지로</Button>
        </div>
      </>
    );
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>조건에 맞는 이벤트가 없습니다.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">All Event 페이지로</Button>
        </div>
      </>
    );
  }
  if (!props.date) return;
  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <>
      <Head>
        <head>Filtered Events</head>
        <meta name="description"
              content={`All events for ${props.date.year}/${props.date.month}`}
        />
      </Head>
      <ResultsTitle date={date}/>
      <EventList items={filteredEvents}/>
    </>
  );
};

type EventProps = {
  events?: EventType[],
  date?: EventDate,
  hasError?: boolean
}

// 필터의 경우 모든 경우의 수를 사전에 렌더링 해놓으면 낭비가 심함.
// 들어오는 모든 요청에 대해서 데이터를 페칭해 반환하는 것이 더 효율적.
export const getServerSideProps = async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<EventProps>> => {

  // if (!context.params) {
  //   return <p className="center">로딩 중입니다.</p>;
  // }

  const {params} = context;

  const filterData = params!.slug as string[];

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      // 에러 페이지를 보여주는 방법들.
      props: {
        // 에러를 체크하는 props를 내려줘도 된다.
        hasError: true
      }
      // notFound: true,
      // redirect: {
      //   destination: '/error'
      // }
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth
      }
    }
  };

};


export default FilteredEventsPage;