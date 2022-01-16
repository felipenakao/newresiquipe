import React from 'react'
import BaseSeparator from '../Global/BaseSeparator';
import Header from '../Global/Header/Header';
import AboutUs from './components/AboutUs';
import Equipaments from './components/Equipaments/Equipaments';
import Featured from './components/Featured';
import Services from './components/Services/Services';
import Videos from './components/Videos/Videos';

const Home = () => (<>
  <Header />
  <Featured />
  <AboutUs />
  <BaseSeparator />
  <Services/>
  <BaseSeparator />
  <Equipaments />
  <BaseSeparator />
  <Videos />
</>);

export default Home