import React, { Fragment } from 'react'
import { useRouter } from 'next/router';
import EvenList from '../../components/events/EvenList';
import EventSearch from '../../components/events/EventSearch';
import { getAllEvents } from '../../dummy-data';

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EvenList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;