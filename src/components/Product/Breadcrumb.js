import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components"
import { laptop, laptopL } from "../../devices";

const Bar = styled.div`
  width: 100%;
  height: 50px;

  background-color: #002f6a;
  color: #fff;
  padding-top: 65px;
  text-align: center;
  font-family: small;

  @media screen and (min-width: ${laptop}) {
    padding-top: 0px
  }

`
const Wrapper = styled.div`
  font-family: Prompt;
  margin: auto;
  max-width: ${laptopL};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`

const Back = styled.div`

@media screen and (max-width: ${laptop}) {
    display: none;
  }

`

const Content = styled.div`


  & a {
    margin: 0px 5px
  }

  & a.current {
    color: #FECB00
  }

`

const Breadcrumb = () => (
  <Bar>
    <Wrapper>

    
    <Back><FontAwesomeIcon icon={faArrowLeft} /> Voltar</Back>

    <Content>
      <a>Página Inicial</a>
      <span>/</span>
      <a>Equipamentos</a>
      <span>/</span>
      <a className="current">Estufa para a cura de resina</a>
    </Content>


    <div></div>
    </Wrapper>
  </Bar>
)

export default Breadcrumb