import logo from './logo.svg';
import React from 'react';
import './App.css';
import Testing from './Components/testing.js'
import Header from './Components/Header/header';
import Navigation from './Components/Navigation/navigation';
import About from './Components/About/about';
import TheTeam from './Components/TheTeam/theTeam';
import Timetable from './Components/Timetable/timetable';
import Gallery from './Components/Gallery/gallery';
import ContactUs from './Components/ContactUs/contactUs';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Testing/>
        <div className="App">
          <Header />
          <Navigation />
          <About />
          <TheTeam />
          <Timetable />
          <Gallery />
          <ContactUs />
          <Footer />
    </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
