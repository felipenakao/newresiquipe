import React, { useEffect } from 'react'

import styled from 'styled-components';
import { useParams, useLocation } from 'react-router-dom';
import { laptop, laptopL } from '../../devices';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import Header from '../Global/Header/Header';
import ImageGallery from 'react-image-gallery';
import BaseSection from '../Global/BaseSection';
import CTAButton from '../Global/Buttons/CTAButton';
import Breadcrumb from './Breadcrumb';
import Footer from '../Global/Footer';

import "react-image-gallery/styles/css/image-gallery.css";
import products from './products.json'
import Helmet from 'react-helmet';

const Wrapper = styled.div`
  margin-top: 60px;

  @media screen and (min-width: ${laptop}) {
    max-width: ${laptopL};
    margin: auto;
    margin-top: auto;
  }
`

const ProductGrid = styled.div`
  @media screen and (min-width: ${laptop}) {
    display: flex;
  }
  
`

const ProductGallery = styled.div`
  margin: 0 0px 30px;

  & .image-gallery-thumbnail {
    cursor: pointer
  }

  & .image-gallery-fullscreen-button {
    right: 0;
    top: 0;
    bottom: auto
  }

  @media screen and (min-width: ${laptop}) {
    margin: 0 30px;
    max-width: 50%;
  }
`

const ProductContent = styled.div`
  color: #072448;
  margin: 0 0px;

  & h2 {
    font-size: 32px;
    margin-top: 0;
    display: block;

    @media screen and (max-width: ${laptop}) {
      display: none;
    }
  }

  & table {
    width: 100%;
    border-collapse: collapse;

    & td {
      padding: 10px;
      border: 1px solid #ddd;
    }
  }

  @media screen and (min-width: ${laptop}) {
    max-width: 50%;
  }
`

const ButtonGrid = styled.div`
  margin: 30px 0px;
`

const ProductBottom = styled.div`
  color: #072448;
  margin-top: 30px;

  & table {
    width: 100%;
    border-collapse: collapse;

    & td {
      padding: 10px;
      border: 1px solid #ddd;
    }
  }

  & div {
    margin: 0px;
    @media screen and (min-width: ${laptop}) {
      margin: 0 30px;
  }
  }
`

const MobileTitle = styled.h2`
color: var(--textColor);

@media screen and (min-width: ${laptop}) {
  display: none;
}
`

const Product = () => {
  let { id } = useParams();

  const product = products.find(product => product.id == id)
  const location = useLocation()

  const thumbnails = product.images.map(file => {
    const image = `/assets/images/equipments/${id}/${file}`
    return ({ original: image, thumbnail: image })
  })

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (<>
  <Helmet>
    <meta charSet="utf-8" />
    <title>New Resiquipe - {product.title}</title>
    <meta name="description" content={product.description} />
    <meta property="og:image" content={thumbnails ? window.location.origin+thumbnails[0].original : ''} />
    <meta property="og:description" content={product.description} />
    <meta property="og:title" content={`New Resiquipe - ${product.title}`} />
    <meta property="og:url" content={window.location.href} />
    <meta name="url" content={window.location.href} />
  </Helmet>

  <Header />

  <Breadcrumb category={product.category} title={product.title} />

  <BaseSection>
  <Wrapper>
    <ProductGrid>

      <MobileTitle>{product.title}</MobileTitle>
      <ProductGallery>
        <ImageGallery showNav={false} showPlayButton={false} items={thumbnails} />
      </ProductGallery>

      <ProductContent>
        <h2>{product.title}</h2>

        {product.description
          ? <><p>{product.description}</p></>
          : null}

        <ButtonGrid>
          <CTAButton
            bgColor="rgb(3, 47, 106)"
            hover="#1164E1"
            href="https://wa.me/5511981637814"
            icon={faWhatsapp}
          >
            Solicitar Equipamento
          </CTAButton>
        </ButtonGrid>

        {product.contains && product.contains.length
          ? <><h3>Contém:</h3>{product.contains.map(text => <p key={text}>{text}</p>)}</> 
          : null}

        {product.specifications_side && product.specifications_side.length
          ? <div>
              <h3>Especificações:</h3>
              <table border="1">
                <tbody>
                {product.specifications_side.map(text => (
                  <tr key={text}>
                    <td>{text}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          : null}

{product.guarantee
          ? <><h3>Garantia:</h3> <p>{product.guarantee}</p></>
          : null}

      </ProductContent>
    </ProductGrid>

    <ProductBottom>

    {product.specifications && product.specifications.length
      ? 
      <div>
      <h3>Especificações:</h3>

      <table border="1">
<tbody>
      {product.specifications.map(text => (<tr>
          <td>{text}</td>
        </tr>))}
        </tbody>
      </table>
      </div>
      : null}

    </ProductBottom>
    </Wrapper>
  </BaseSection>
  <Footer />
</>)}

export default Product