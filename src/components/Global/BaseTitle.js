import styled from "styled-components";
import { tablet } from '../../devices'

const BaseTitleGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BaseTitleHeading = styled.h2`
  font-family: 'Prompt';
  white-space: nowrap;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  font-style: italic;
  color: #072448;
  position: relative;
  margin: 0px;

  & > span {
    color: #1164E1;
  }

  @media screen and (min-width: ${tablet}) {
    font-size: 28px;
  }
`

const BaseTitleOverlay = styled.span`
  font-family: 'Prompt';
  font-size: 36px;
  font-weight: 600;
  font-style: italic;
  letter-spacing: 5px;
  color: #F7F7F7;
  position: absolute;
  text-align: center;

  @media screen and (min-width: ${tablet}) {
    font-size: 60px;
    letter-spacing: 18px;
  }
`

const Subtitle = styled.p`
  font-family: 'Prompt';
  text-align: center;
  position: relative;
  margin: 0px;
  font-weight: 300;
  font-style: italic;
  font-size: 12px;
  color: var(--textColor);

  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
  }
`

const BaseTitle = ({ children, overlayText, subtitle }) => {
  return (
    <BaseTitleGrid>
      <BaseTitleOverlay>{overlayText}</BaseTitleOverlay>
      <BaseTitleHeading>{children}</BaseTitleHeading>
      <Subtitle>{subtitle}</Subtitle>
    </BaseTitleGrid>
  )
}

export default BaseTitle