import EventsSubComp from './Sub/EventsSubComp';
import ActiveEvents from './Sub/ActiveEvents';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';

export default function Events() {
  useEffect(() => {
    document.title = "AOC Events"
  })
  return (
    <div>
      <Navbar />
      <ActiveEvents />
      <EventsSubComp />
      <Footer />
    </div>
  );
}
