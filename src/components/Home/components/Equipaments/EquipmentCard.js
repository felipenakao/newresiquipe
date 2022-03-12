import styled from "styled-components";
import { tablet } from "../../../../devices";

const EquipmentCardContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 15px;
  text-align: center;
  color: #152f50;
  font-family: "Prompt";
  position: relative;
  cursor: pointer;
  margin: 30px 0px;
  width: auto;

  & >a {
    width: auto;
  }

  @media screen and (min-width: ${tablet}) {
    max-width: 200px;
    padding: 30px 60px;
    margin: 15px;
  }

  transform: scale(1);
  transition: transform .5s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: transform .5s ease-in-out;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  }

  &:hover > div {
    opacity: 1;
    transition: opacity .5s ease-in-out;
    ;
  }
`;

const EquipmentImage = styled.img`
max-width: 200px;
  height: auto;
  object-fit: contain;
  margin-bottom: 15px;

  
  @media screen and (min-width: ${tablet}){
    max-width: 280px;
    height: 200px;
  }
`;

const EquipmentTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0px;
`;

const EquipmentParagraph = styled.p`
  font-size: 14px;
  margin: 0px;
`;

const EquipmentCategory = styled.h4`
  color: var(--highlightColor);
  font-size: 12px;
  font-weight: 400;
`

const EquipamentHoverIcon = styled.img`
  width: 48px;
`

const EquipmentHover = styled.div`
    position: absolute;
    display: none;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: rgba(255,255,255,.9);
    opacity: 0;
    transition: opacity .5s ease-in-out;

    &:hover {
      opacity: 1;
      transition: opacity .5s ease-in-out;
    }

    @media screen and (min-width: ${tablet}){
      display: flex;
    }
`;

const EquipmentBadge = styled.span`
  background: var(--highlightColor);
  position: absolute;
  top: 15px;
  left: 15px;
  border-radius: 100px;
  color: #fff;
    font-size: 12px;
  padding: 2.5px 7.5px;
`


const EquipmentHoverLabel = styled.p`
  font-family: 'Prompt';
  font-weight: bold;
`

const productionType = {
  "high": {
    text: 'Alta Produção',
    color: 'rgb(221, 51, 90)'
  },
  "medium": {
    text: 'Média Produção',
    color: '#1164E1'
  },
  "low": {
    text: 'Baixa Produção',
    color: 'rgb(38, 211, 102)'
  }
}

const EquipmentCard = ({ children, title, src, category, production }) => {
  return (
    <EquipmentCardContainer title={title}>

      <EquipmentImage alt={title} src={src} />

      <EquipmentTitle>{title}</EquipmentTitle>

      <EquipmentCategory>{category}</EquipmentCategory>

      <EquipmentParagraph>{children}</EquipmentParagraph>

      <EquipmentHover>
        <EquipamentHoverIcon src="/assets/images/equipments/ver-mais.svg" />
        <EquipmentHoverLabel>VER DETALHES</EquipmentHoverLabel>
      </EquipmentHover>

      {productionType[production].text ? <EquipmentBadge style={{ background: productionType[production].color }}>{productionType[production].text}</EquipmentBadge> : null}

    </EquipmentCardContainer>
  );
};

export default EquipmentCard;
