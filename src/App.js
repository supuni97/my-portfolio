import './App.css';
import { useEffect } from 'react';
import Aos from 'aos';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/Contact';
function App() {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero/>
       
        <Portfolio/>
        <Contact/>
      </main>
      <Footer />
    </>
  );
}

export default App;
