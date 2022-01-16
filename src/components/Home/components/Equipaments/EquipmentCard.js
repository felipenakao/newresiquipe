import styled from "styled-components";
import { tablet } from "../../../../devices";

const EquipmentCardContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  color: #152f50;
  font-family: "Prompt";
  position: relative;
  cursor: pointer;
  margin: 30px 0px;

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
  height: 200px;
  object-fit: contain;
  margin-bottom: 15px;
`;

const EquipmentTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0px;
`;

const EquipmentParagraph = styled.p`
  font-size: 12px;
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
    display: flex;
    flex-direction: column;
    height: 200px;
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
`;


const EquipmentHoverLabel = styled.p`
  font-family: 'Prompt';
  font-weight: bold;
`

const EquipmentCard = ({ children, title, src, category }) => {
  return (
    <EquipmentCardContainer title={title}>

      <EquipmentImage alt={title} src={src} />

      <EquipmentTitle>{title}</EquipmentTitle>

      <EquipmentCategory>{category}</EquipmentCategory>

      <EquipmentParagraph>{children}</EquipmentParagraph>

      <EquipmentHover>
        <EquipamentHoverIcon src="/assets/images/equipments/ver-mais.svg" />
        <EquipmentHoverLabel>VER MAIS</EquipmentHoverLabel>
      </EquipmentHover>

    </EquipmentCardContainer>
  );
};

export default EquipmentCard;
