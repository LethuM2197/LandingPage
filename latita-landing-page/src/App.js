import React from 'react';
import './App.css';


import Hero from './components/Hero'
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import RequestForm from './components/RequestForm';
import  InfoPage from './components/Info';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar/>
      <About />
      <Services />
      <RequestForm />
      <InfoPage/>
      <FooterCTA />
    </div>
  );
}

export default App;
