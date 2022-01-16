import styled from "styled-components"
import { tablet } from "../../../devices"

import BaseTitle from "../../Global/BaseTitle"
import BaseSection from "../../Global/BaseSection"

const AboutUsContainer = styled.div`
  margin: 15px auto;
  max-width: 500px;
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    align-items: center;
    background-image: url('/assets/images/about-us/logo-overlay.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    max-width: ${tablet};
    padding: 30px;
    margin: 60px auto;
  }
`

const AboutUsImageGrid = styled.div`
  margin: 30px 0px;
  text-align: center;

  @media screen and (min-width: ${tablet}) {
    margin: 60px;
  }
`

const AboutUsImage = styled.img`
  max-width: 100%;
  margin-bottom: 30px;
  border-radius: 15px;

  @media screen and (min-width: ${tablet}) {
    max-width: 250px;
    margin-bottom: 30px;
    margin-top: 30px;
  }
`

const AboutUsTextGrid = styled.div`
  margin: 30px 0px;

  @media screen and (min-width: ${tablet}) {
    margin: 60px;
  }
`

const AboutUsParagraph = styled.p`
  font-family: 'Prompt';
  font-size: 12px;
  color: var(--textColor);
  text-align: center;
  margin: 30px 0px;

  @media screen and (min-width: ${tablet}) {
    font-size: 14px;
    text-align: left;
  }
`

const AboutUs = () => {
  return <>
    <BaseSection>
      <BaseTitle overlayText="QUEM SOMOS">
        New Resiquipe . <span>Quem Somos</span>
      </BaseTitle>

      <AboutUsContainer>
        <AboutUsImageGrid>
          <AboutUsImage src="/assets/images/about-us/about-01.jpg" />
          <AboutUsImage src="/assets/images/about-us/about-02.jpg" />
          <AboutUsImage src="/assets/images/about-us/about-03.jpg" />
        </AboutUsImageGrid>

        <AboutUsTextGrid>
          <AboutUsParagraph>
            <b className="highlight">A New Resiquipe Equipamentos para Resinagem</b> é uma empresa brasileira que, desde 1994 atua no segmento de equipamentos para Resina Epóxi e PU (poliuretano).
          </AboutUsParagraph>
          <AboutUsParagraph>
            A empresa, com suas máquinas e equipamentos, leva até ao cliente tecnologia que facilita e agiliza seu trabalho, trazendo melhorias na produção e qualidade do produto.
          </AboutUsParagraph>
          <AboutUsParagraph>
            <b>Fornecemos máquinas para todo o território nacional que atendem as necessidades de cada cliente.</b>
          </AboutUsParagraph>
          <AboutUsParagraph>
            Nossos técnicos estão sempre a disposição para orientar, conseguindo uma boa performance dos equipamentos e resinas.
          </AboutUsParagraph>
          <AboutUsParagraph>
            Recentemente lançou no mercado podutos com tecnologia de ponta para aplicação de resinas de Poliuretano (PU), revolucionando com o Desgaseificador para Resina PU, que possibilita a utilização desta resina manualmente.
          </AboutUsParagraph>
        </AboutUsTextGrid>
      </AboutUsContainer>
    </BaseSection>
  </>
}

export default AboutUs