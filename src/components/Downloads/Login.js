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
  min-width: 50%;
  margin: auto;
  font-family: Prompt;
  font-size: 16px;
  color: var(--textColor);
  text-align: center;

  @media (min-width: ${tablet}) {
    min-width: 250px;
  }
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

        <BaseTitle overlayText="Downloads" subtitle="Tenha acesso aos arquivos para download e vídeo-aulas de treinamento.">
          Área <span>Restrita</span>
        </BaseTitle>

        <Grid>
          <Input placeholder="Digite a senha aqui..." onKeyPress={event => {
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