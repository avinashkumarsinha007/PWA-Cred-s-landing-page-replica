import React from 'react';
import Header from './Components/Header';
import HeroBanner from './Components/HeroBanner/HeroBanner';
import ScrollingText from './Components/ScrollingText/ScrollingText';
import MobileTransition from './Components/MobileTransition/MobileTransition';
import SpinningCards from './Components/SpinningCards/SpinningCards';
import Footer from './Components/Footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div id="__next">
      <Header />
      <HeroBanner />
      <ScrollingText />
      <MobileTransition />
      <SpinningCards />
      <Footer/>
    </div>
  );
}

export default App;
