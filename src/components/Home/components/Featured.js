import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { tablet } from '../../../devices'

const FeaturedContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #002f6a;
  box-shadow: inset 0px 0px 30px rgba(0,0,0, .3);
  padding-top: 60px;

  @media screen and (min-width: ${tablet}) {
    margin: 0px auto;
    padding: 0px 60px 15px;
    box-shadow: 0px 0px 30px rgba(0,0,0, .3);
  }
`;

const FeaturedTitleGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 5px;
  margin: 0px 30px;
  border: 1px solid #0047a0;
  border-end-end-radius: 15px;
  border-end-start-radius: 15px;
  text-align: center;

  @media screen and (min-width: ${tablet}) {
    margin: 0px auto;
    padding: 15px 60px;
    box-shadow: 0px 0px 30px rgba(0,0,0, .3);
  }
`;

const FeaturedTitleText = styled.h2`
  font-family: 'Prompt';
  font-size: 16px;
  font-weight: 600;
  margin: 0px;
  color: #fff;

  @media screen and (min-width: ${tablet}) {
    font-size: 24px;
  }
`;

const CarouselContainer = styled.div`
  margin: 30px 0px 0px;

  & .carousel .slide {
    padding: 0px 30px;
  }

  & .carousel .slider-wrapper {
    overflow: visible;
  }
  
  & .carousel.carousel-slider img {
    border-radius: 15px;
    box-shadow: 0px 15px 15px rgba(0,0,0, .3);
  }

  & .carousel.carousel-slider {
    /* overflow: visible; */
    flex-direction: column-reverse;
    display: flex;
  }

  & .control-dots {
    position: static;
    margin: 30px 0px;
  }

  & .carousel .control-dots .dot {
    background: #002f6a;
    border: 1px solid #fff;
    opacity: 1;
    width: 11px;
    height: 11px;
  }

  & .carousel .control-dots .dot.selected {
    background: #fecb00;
  }
`;

const BrazilContainer = styled.div`
  margin: 0px 30px 30px;
  display: flex;
  color: #fff;
  font-family: 'Prompt';
  align-items: center;
  justify-content: center;

  & img {
    height: 24px;
    margin-right: 7.5px;

    @media screen and (min-width: ${tablet}) {
      height: 28px;
    }

  }

  & h3 {
    font-size: 13px;
    margin: 0px;

    @media screen and (min-width: ${tablet}) {
      font-size: 16px;
    }

  }

  & h3 > span {
    color: #fecb00;
  }

  & p {
    margin: 0px;
    font-style: italic;
    font-size: 8px;

    @media screen and (min-width: ${tablet}) {
      font-size: 11px;
    }

  }

`

const Featured = () => {
  return (
    <>
      <FeaturedContainer>
        <FeaturedTitleGrid>
          <FeaturedTitleText>Equipamentos para Resinagem</FeaturedTitleText>
        </FeaturedTitleGrid>

        <CarouselContainer>
          <Carousel
            centerMode={true}
            centerSlidePercentage={(window.innerWidth > Number(tablet.replace('px', ''))) ? 33 : 100}
            infiniteLoop
            swipeable
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            autoPlay
          >
            <div>
              <img src="/assets/images/slider/slider-01.jpg" />
            </div>
            <div>
              <img src="/assets/images/slider/slider-02.jpg" />
            </div>
            <div>
              <img src="/assets/images/slider/slider-03.jpg" />
            </div>
            <div>
              <img src="/assets/images/slider/slider-04.jpg" />
            </div>
            <div>
              <img src="/assets/images/slider/slider-05.jpg" />
            </div>
          </Carousel>
        </CarouselContainer>

        <BrazilContainer>
          <img src="/assets/images/brazil-flag.svg" />
          <div>
            <h3>EQUIPAMENTOS <span>100%</span> NACIONAIS</h3>
            <p>Gerando empregos e sinergia com nossos clientes</p>
          </div>
        </BrazilContainer>
      </FeaturedContainer>
    </>
  );
};

export default Featured;
