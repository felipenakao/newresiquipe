import { useState } from "react";
import styled from "styled-components";
import { tablet } from "../../devices";
import BaseSection from "../Global/BaseSection";
import BaseTitle from "../Global/BaseTitle";
import Footer from "../Global/Footer";
import Header from "../Global/Header/Header";

const Grid = styled.div`
  text-align: center;

  padding: 30px 0px; 

  @media (min-width: ${tablet}) {
    padding: 30px; 
  }
`

const Input = styled.input`
  border: 1px solid #ccc;
  padding: 10px 15px;
  min-width: 250px;
  margin: auto;
  font-family: Prompt;
  color: var(--textColor);
  text-align: center;
`

const Error = styled.p`
  color: red;
  margin: 5px;
`

const Submit = styled.button`
  cursor: pointer;
  border: 0px;
  background-color: var(--highlightColor);
  font-family: Prompt;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 10px 20px;
  margin: 30px 15px 15px;

  &:hover {
    background-color: var(--textColor);
  }

  &:active {
    background-color: var(--secondColor);
  }
`



const Login = ({ handleLogin, error }) => {
  const [value, setValue] = useState(null)

  return (
    <>
      <Header />

      <BaseSection>

        <BaseTitle overlayText="Downloads" subtitle="Insira uma senha para ter acesso aos arquivos para download.">
          Área de <span>Downloads</span>
        </BaseTitle>

        <Grid>
          <Input placeholder="Digite a senha aqui..." onKeyPress={event => {
            console.log('event', event)
            if (event.key === 'Enter') {
              handleLogin(value)
            }
          }} onChange={e => { setValue(e.target.value) }}/>

          <Error>{error}</Error>

          <Submit onClick={() => handleLogin(value)}>
            Acessar
          </Submit>
        </Grid>


      </BaseSection>

      <Footer />
    </>
  )
}

export default Login;