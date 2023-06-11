import Navbar from './Navbar';
import Footer from './Footer';
import AboutSubComp from './Sub/AboutSubComp';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = "About"
  })
  return (
    <div>
      <Navbar />
      <AboutSubComp />
      <Footer />
    </div>
  );
}
