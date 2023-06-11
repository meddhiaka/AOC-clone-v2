import Footer from './Footer';
import Navbar from './Navbar';
import ContactSubComp from './Sub/ContactSubComp';
import { useEffect } from 'react';

export default function Team() {
  useEffect(() => {
    document.title = "Contact"
    window.scrollTo(0, 0);
  })
  return (
    <div>
      <Navbar />
      <ContactSubComp />
      <Footer />
    </div>
  );
}
