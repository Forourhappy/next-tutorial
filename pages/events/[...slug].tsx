import React from 'react';
import {useRouter} from 'next/router';
import {getFilteredEvents} from '@/dummy-data';
import EventList from '@/components/events/EventList';
import ResultsTitle from '@/components/events/ResultsTitle';
import Button from '@/components/ui/button';
import ErrorAlert from '@/components/ui/ErrorAlert';

const FilteredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">로딩 중입니다.</p>;
  }

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

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  });

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

  return (
    <>
      <ResultsTitle date={new Date(numYear, numMonth - 1)}/>
      <EventList items={filteredEvents}/>
    </>
  );
};

export default FilteredEventsPage;