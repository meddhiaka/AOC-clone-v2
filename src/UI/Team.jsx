import Footer from './Footer';
import Navbar from './Navbar';
import TeamSubComp from './Sub/TeamSubComp';
import { useEffect } from 'react';

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AOC Team"
  })
  return (
    <div>
      <Navbar />
      <TeamSubComp />
      <Footer />
    </div>
  );
}
