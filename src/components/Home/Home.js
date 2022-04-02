import React, { useEffect, useState } from 'react'
import BaseSeparator from '../Global/BaseSeparator';
import Footer from '../Global/Footer';
import Header from '../Global/Header/Header';
import AboutUs from './components/AboutUs';
import Equipaments from './components/Equipaments/Equipaments';
import Featured from './components/Featured';
import Services from './components/Services/Services';
import Videos from './components/Videos/Videos';

const Home = () => {

  const [isActive, setIsActive] = useState('');
  const [categoryExpand, toggleCategoryExpand] = useState(false);
  const [productionExpand, toggleProductionExpand] = useState(false);
  const [isProductionActive, setProductionActive] = useState('');
  
  return (<>
  <Header setIsActive={setIsActive} setProductionActive={setProductionActive} />
  <Featured />
  <AboutUs />
  <BaseSeparator />
  <Services/>
  <BaseSeparator />
  <Equipaments
    isActive={isActive}
    setIsActive={setIsActive}
    categoryExpand={categoryExpand}
    toggleCategoryExpand={toggleCategoryExpand}
    productionExpand={productionExpand} 
    toggleProductionExpand={toggleProductionExpand}
    isProductionActive={isProductionActive}
    setProductionActive={setProductionActive}
  />
  <BaseSeparator />
  <Videos />
  <Footer />
</>)};

export default Home