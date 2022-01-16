import styled from "styled-components";
import { tablet } from '../../devices'

const BaseSectionGrid = styled.section`
  padding: 60px 30px;

  @media screen and (min-width: ${tablet}) {
    padding: 120px 30px;
  }
`

const BaseSection = ({ children }) => {
  return (
    <BaseSectionGrid>
      {children}
    </BaseSectionGrid>
  )
}

export default BaseSection