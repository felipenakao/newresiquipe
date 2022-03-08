import styled from "styled-components";
import BaseTitle from "../../../Global/BaseTitle";
import ServiceCard from "./ServiceCard";
import { tablet, laptopL } from "../../../../devices";
import BaseSection from "../../../Global/BaseSection";

const ServiceLine = styled.span`
  width: 2px;
  height: calc(100% - 60px);
  background: var(--highlightColor);
  position: absolute;
  left: 50%;
  top: 30px;

  @media screen and (min-width: ${tablet}){
    height: 2px;
    width: calc(50%);
    top: 50%;
    left: 25%;
  }
`;

const CardsGrid = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 30px auto;
  max-width: ${laptopL};

  @media screen and (min-width: ${tablet}){
    flex-direction: row;
    justify-content: center;
  }
`;

const Services = () => {
  return (
    <BaseSection id="servicos">
      <BaseTitle overlayText="SERVIÇOS" subtitle="Nossos profissionais estão sempre prontos para lhe atender.">
        Nossos <span>Serviços</span>
      </BaseTitle>

      <CardsGrid>
        <ServiceLine />

        <ServiceCard
          title="Equipamentos sob medida"
          icon="/assets/images/services/equipamentos.svg"
        >
          Utilize a nossa experiência na fabricação de equipamentos para resinagem.
        </ServiceCard>

        <ServiceCard
          title="Treinamento"
          icon="/assets/images/services/treinamento.svg"
        >
          Sempre procurando lhes oferecer todo o conhecimento para que o seu negócio tenha mais êxito.
        </ServiceCard>

        <ServiceCard
          title="Suporte Técnico"
          icon="/assets/images/services/suporte.svg"
        >
          Nossos técnicos estão a sua disposição para esclarecer dúvidas e informações.
        </ServiceCard>
      </CardsGrid>
    </BaseSection>
  );
};

export default Services;
