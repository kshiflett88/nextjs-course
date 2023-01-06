import React, { Fragment } from 'react'
import EvenList from '../../components/events/EvenList';
import EventSearch from '../../components/events/EventSearch';
import { getAllEvents } from '../../dummy-data';

function AllEventsPage() {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventSearch />
      <EvenList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;