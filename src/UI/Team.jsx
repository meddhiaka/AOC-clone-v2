import Footer from './Footer';
import Navbar from './Navbar';
import TeamSubComp from './Sub/TeamSubComp';
import { useEffect } from 'react';

export default function Team() {
  useEffect(() => {
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
