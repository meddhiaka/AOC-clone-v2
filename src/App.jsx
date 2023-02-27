import './App.css';
import FAQ from './UI/FAQ';
import Footer from './UI/Footer';
import MainVideo from './UI/MainVideo';
import Navbar from './UI/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <MainVideo />
      <FAQ />
      <Footer />
    </div>
  );
}
