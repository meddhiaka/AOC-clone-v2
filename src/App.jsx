import { useEffect } from 'react';
import './App.css';
import Hello from './UI/Hello';
import Footer from './UI/Footer';
import MainVideo from './UI/MainVideo';
import Navbar from './UI/Navbar';
import { Helmet } from 'react-helmet';
import StatsSubComp from './UI/Sub/StatsSubComp';
import FAQ from './UI/FAQ';

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
      <Hello />
      <FAQ />
      <StatsSubComp />
      <Footer />
    </div>
  );
}
