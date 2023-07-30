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

  function hideBanner() {
    document.getElementById('bannerOverlay').classList.add('hide')
  }

  const [isActive, setIsActive] = useState('');
  const [categoryExpand, toggleCategoryExpand] = useState(false);
  const [productionExpand, toggleProductionExpand] = useState(false);
  const [isProductionActive, setProductionActive] = useState('');

  useEffect(() => {
    // Update the document title using the browser API


  });

  const mountBanner = () => {
    console.log('mountBanner')


    setTimeout(function () {

      document.getElementById('bannerOverlay').classList.add('show')
    }, 5000)
  }
  
  return (<>
  <Helmet>
    <meta charSet="utf-8" />
    <title>New Resiquipe - Equipamentos para resinagem</title>
    <meta name="description" content="A New Resiquipe Equipamentos para Resinagem é uma empresa brasileira que, desde 1994 atua no segmento de equipamentos para Resina Epóxi e PU (poliuretano)." />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="New Resiquipe - Equipamentos para resinagem" />
    <meta property="og:description" content="A New Resiquipe Equipamentos para Resinagem é uma empresa brasileira que, desde 1994 atua no segmento de equipamentos para Resina Epóxi e PU (poliuretano)." />
    <meta property="og:image" content={`${window.location.origin}/logo-new-resiquipe.jpg`} />
    <meta property="og:url" content={window.location.href} />
    <meta property="og:site_name" content="New Resiquipe" />
  </Helmet>

  <Header
    setIsActive={setIsActive}
    setProductionActive={setProductionActive}
  />

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

  <img width="0px" height="0px" src='banner.jpg' onLoad={e => mountBanner()} onError={e => console.log('e', e) } />

  <div id='bannerOverlay' className='bannerOverlay' onClick={hideBanner}>
    <div className='bannerContent'>
      <img src='banner.jpg' />

      <div className='bannerClose' onClick={hideBanner}>X</div>
    </div>
  </div>
  
    <div className='loadingElement'>
      <img src='assets/images/logo-new-resiquipe.png' />
    </div>

</>)};

export default Home