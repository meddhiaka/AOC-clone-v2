import Navbar from './Navbar';
import Footer from './Footer';
import AboutSubComp from './Sub/AboutSubComp';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div>
      <Helmet>
        <title>AOC About</title>
      </Helmet>
      <Navbar />
      <AboutSubComp />
      <Footer />
    </div>
  );
}
