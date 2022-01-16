import styled from "styled-components"
import { tablet } from "../../../devices"

const ServiceCardContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  box-shadow: 0px 0px 15px rgba(0,0,0,.05);
  border-radius: 15px;
  padding: 60px;
  text-align: center;
  color: #152F50;
  font-family: 'Prompt';
  position: relative;

  @media screen and (min-width: ${tablet}){
    max-width: 200px;
  }
`

const ServiceIcon = styled.img`
  height: 50px;
  margin-bottom: 5px;
`

const ServiceTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
`

const ServiceParagraph = styled.p`
  font-size: 12px;
  margin: 0px;
`

const ServiceCard = ({ icon, title, children }) => {
return (
  <ServiceCardContainer title={title}>
    <ServiceIcon alt={title} src={icon} />

    <ServiceTitle>
      {title}
    </ServiceTitle>

    <ServiceParagraph>
      {children}
    </ServiceParagraph>

  </ServiceCardContainer>
)

}

export default ServiceCard