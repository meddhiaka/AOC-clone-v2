import EventsSubComp from './Sub/EventsSubComp';
import ActiveEvents from './Sub/ActiveEvents';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Events() {
  return (
    <div>
      <Navbar />
      <ActiveEvents />
      <EventsSubComp />
      <Footer />
    </div>
  );
}
