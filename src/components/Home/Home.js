import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
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
  <Helmet>
    <meta charSet="utf-8" />
    <title>New Resiquipe - Equipamentos para resinagem</title>
    <meta name="description" content="A New Resiquipe Equipamentos para Resinagem é uma empresa brasileira que, desde 1994 atua no segmento de equipamentos para Resina Epóxi e PU (poliuretano)." />
    {/* <meta property="og:type" content="article" />
    <meta property="og:title" content="TITLE OF YOUR POST OR PAGE" />
    <meta property="og:description" content="DESCRIPTION OF PAGE CONTENT" />
    <meta property="og:image" content="LINK TO THE IMAGE FILE" />
    <meta property="og:url" content="http" />
    <meta property="og:site_name" content="SITE NAME" /> */}
  </Helmet>
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
  <div className='loadingElement'>
    <img src='assets/images/logo-new-resiquipe.png' />
  </div>
</>)};

export default Home