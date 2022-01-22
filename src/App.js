import logo from './logo.svg';
import './App.css';
import Card from './components/card.js';
import About from './components/about.js';
import Skills from './components/skills.js';
import Contact from './components/contact';
import Footer from './components/footer.js';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    })
  }) 

  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About />
      </div>
      <div data-aos="fade-down" data-aos-duration="800" data-aos-delay="800">
        <Skills />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
