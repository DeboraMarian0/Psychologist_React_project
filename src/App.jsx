import './App.css';

import Header from './components/Header/Header.jsx';
import Banner from './components/Banner/Banner.jsx';
import About from './components/About/About.jsx';
import Specialties from './components/Specialties/Specialties.jsx';
import Process from './components/Process/Process.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <About />
        <Specialties />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
