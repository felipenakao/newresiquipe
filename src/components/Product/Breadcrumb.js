import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { laptop, laptopL } from "../../devices";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components"

import filters from '../../constants/filters.json'

const Bar = styled.div`
  width: 100%;
  height: 50px;

  background-color: #002f6a;
  color: #fff;
  padding-top: 65px;
  text-align: center;
  position: fixed;
  z-index: 7;

  @media screen and (min-width: ${laptop}) {
    padding-top: 0px;
    position: relative;
  }

`
const Wrapper = styled.div`
  display: flex;
  font-family: Prompt;
  font-size: 14px;
  margin: auto;
  max-width: ${laptopL};
  justify-content: space-between;
  align-items: center;
  height: 50px;

  
  @media screen and (max-width: ${laptop}) {
  }
`

const Back = styled.div`
  cursor: pointer;
  color: white;
  margin: 10px;

  &:hover {
    color: #FECB00
  }

`

const Content = styled.div`
  & > * {
    margin: 0px 2px;
  }

  & a {
    color: #fff;
    text-decoration: none;
    
    &:hover {
      color: #FECB00
    }
  }

  & a.current {
    color: #FECB00
  }

  @media screen and (max-width: ${laptop}) {
    display: none;
  }

`

const Breadcrumb = ({ category, title }) => {
  const navigate = useNavigate();
  return (
  <Bar>
    <Wrapper>
    
    <Back onClick={() => navigate(-1)}>
      <FontAwesomeIcon icon={faArrowLeft} /> Voltar
    </Back>

    <Content>
      <Link to="/"><FontAwesomeIcon icon={faHome} />&nbsp;Página Inicial</Link>
      <span>/</span>
      <span>{filters.categories.find(item => item.id == category).label}</span>
      <span>/</span>
      <Link className="current" to={useLocation().pathname}>{title}</Link>
    </Content>


    <div></div>
    </Wrapper>
  </Bar>
)}

export default Breadcrumb