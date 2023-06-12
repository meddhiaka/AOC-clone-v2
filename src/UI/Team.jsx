import Footer from './Footer';
import Navbar from './Navbar';
import TeamSubComp from './Sub/TeamSubComp';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div>
      <Helmet>
        <title>AOC Team</title>
      </Helmet>
      <Navbar />
      <TeamSubComp />
      <Footer />
    </div>
  );
}
