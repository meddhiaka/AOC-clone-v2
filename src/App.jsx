import { useEffect } from 'react';
import './App.css';
import FAQ from './UI/FAQ';
import Footer from './UI/Footer';
import MainVideo from './UI/MainVideo';
import Navbar from './UI/Navbar';

export default function App() {
  useEffect(() => {
    document.title = "AOC Clone v2"
    window.scrollTo(0, 0);
  })
  return (
    <div>
      <Navbar />
      <MainVideo />
      <FAQ />
      <Footer />
    </div>
  );
}
