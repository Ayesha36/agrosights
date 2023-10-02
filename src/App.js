import React from 'react';
import './App.css';

import NavBar from './UIcomponents/navbar';
import Header from './UIcomponents/header';
import Statement from './UIcomponents/description';
import PrecisonSection from './UIcomponents/precison';
import Feature from './UIcomponents/feature';
import PersonalizedAdvisory from './UIcomponents/advisory';
import Sustainbility from './UIcomponents/Sustainbility';
import Progess from './UIcomponents/progress';
import Footer from'./UIcomponents/footer';

function App() {
  return (

  <div className="bg-[#]">
    <NavBar/>
    <Header/> 
    <Statement/>
    <PrecisonSection/>
    <Feature/>
    <PersonalizedAdvisory/>
    <Sustainbility/>
    <Progess/>
    <Footer/>
    </div>
  );
}

export default App;
