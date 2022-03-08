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
  cursor: pointer;

  &:hover {
    color: #FECB00
  }

  @media screen and (max-width: ${laptop}) {
    display: none;
  }

`

const Content = styled.div`
  & > * {
    margin: 0px 5px;
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

`

const Breadcrumb = ({ category, title }) => {
  const navigate = useNavigate();
  return (
  <Bar>
    <Wrapper>

    
    <Back onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeft} /> Voltar</Back>

    <Content>
      <Link to="/"><FontAwesomeIcon icon={faHome} />&nbsp;<a>Página Inicial</a></Link>
      <span>/</span>
      <span>{filters.categories.find(item => item.id == category).label}</span>
      <span>/</span>
      <Link to={useLocation().pathname}><a className="current">{title}</a></Link>
    </Content>


    <div></div>
    </Wrapper>
  </Bar>
)}

export default Breadcrumb