import React from 'react'
import BaseSeparator from '../Global/BaseSeparator';
import Header from '../Global/Header/Header';
import AboutUs from './components/AboutUs';
import Featured from './components/Featured';
import Services from './components/Services';

const Home = () => (<>
  <Header />
  <Featured />
  <AboutUs />
  <BaseSeparator />
  <Services/>
</>);

export default Home