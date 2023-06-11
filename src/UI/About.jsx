import Navbar from './Navbar';
import Footer from './Footer';
import AboutSubComp from './Sub/AboutSubComp';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = "About"
    window.scrollTo(0, 0);
  })
  return (
    <div>
      <Navbar />
      <AboutSubComp />
      <Footer />
    </div>
  );
}
