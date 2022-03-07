import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import AboutSection from './components/Containers/AboutSection/AboutSection';
import StoreSection from './components/Containers/StoreSection/StoreSection';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <AboutSection></AboutSection>
      <StoreSection></StoreSection>
      <Carousel></Carousel>
      <Footer></Footer>
    </div>
  );
}

export default App;
