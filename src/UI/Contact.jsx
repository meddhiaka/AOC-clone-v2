import Footer from './Footer';
import Navbar from './Navbar';
import ContactSubComp from './Sub/ContactSubComp';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div>
      <Helmet>
        <title>AOC Contact</title>
      </Helmet>
      <Navbar />
      <ContactSubComp />
      <Footer />
    </div>
  );
}
