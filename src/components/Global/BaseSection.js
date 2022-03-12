import styled from "styled-components";
import { tablet } from '../../devices'

const BaseSectionGrid = styled.section`
  padding: 90px 30px 30px;

  @media screen and (min-width: ${tablet}) {
    padding: 90px 30px;
  }
`

const BaseSection = ({ children, id }) => {
  return (
    <BaseSectionGrid id={id}>
      {children}
    </BaseSectionGrid>
  )
}

export default BaseSection