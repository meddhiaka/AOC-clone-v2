import { useEffect } from 'react';
import './App.css';
import FAQ from './UI/FAQ';
import Footer from './UI/Footer';
import MainVideo from './UI/MainVideo';
import Navbar from './UI/Navbar';
import {Helmet} from 'react-helmet';
import StatsSubComp from './UI/Sub/StatsSubComp';

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div>
      <Helmet>
        <title>AOC - Homepage</title>
      </Helmet>
      <Navbar />
      <MainVideo />
      <FAQ />
      <StatsSubComp />
      <Footer />
    </div>
  );
}
