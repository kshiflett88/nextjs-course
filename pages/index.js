import React from 'react'
import EvenList from '../components/events/EvenList';
import { getFeaturedEvents } from '../dummy-data';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EvenList items={featuredEvents} />
    </div>
  )
}

export default HomePage;