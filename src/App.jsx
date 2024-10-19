import React from 'react';
import Benefits from './components/Benefits/benefit';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Why from './components/Why/why';
import NavBar from './components/NavBar/navBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Why />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
