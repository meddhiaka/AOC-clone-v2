import EventsSubComp from './Sub/EventsSubComp';
import ActiveEvents from './Sub/ActiveEvents';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default function Events() {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div>
      <Helmet>
        <title>AOC Events</title>
      </Helmet>
      <Navbar />
      <ActiveEvents />
      <EventsSubComp />
      <Footer />
    </div>
  );
}
