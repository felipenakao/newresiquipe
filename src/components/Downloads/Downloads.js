import styled from "styled-components";
import { tablet } from "../../devices";
import BaseSection from "../Global/BaseSection";
import BaseTitle from "../Global/BaseTitle";
import Footer from "../Global/Footer";
import Header from "../Global/Header/Header";

import calculoResina from "./files/CALCULO RESINA.xlsx"
import instrucoes from "./files/INSTRUCOES_PARA_OPERAR_O_ARTCAM_PARA_C.doc"

const DownloadGrid = styled.div`
  display: flex;
  padding: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${tablet}) {
    flex-direction: row;
  }
`

const Arquivo = styled.a`
  text-decoration: none;
  color: #222;
  width: 200px;
  height: 200px;
  font-family: Prompt;
  font-size: 14px;
  text-align: center;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  border: 1px solid #eee;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  padding: 15px;
  margin: 15px;
  border-radius: 15px;
  transition: all ease .5s;

  & span {
    color: var(--highlightColor);
    font-size: 14px;
  }

  & img {
    margin-top: 15px;
    max-width: 48px;
  }

  &:active {
    background-color: var(--secondColor);
  }

  &:hover  {
    text-decoration: underline;
    color: var(--highlightColor);
    transition: all ease .5s;
    transform: scale(1.05);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.10);
  }
`

const ButtonsGrid = styled.div`
  text-align: center;
`

const Button = styled.button`
  cursor: pointer;
  border: 0px;
  background-color: var(--highlightColor);
  font-family: Prompt;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 10px 20px;
  margin: 15px auto;

  &:hover {
    background-color: var(--textColor);
  }

  &:active {
    background-color: var(--secondColor);
  }
`

const Downloads = ({ handleLogout }) => {
  return <>
  <Header></Header>

  <BaseSection>
    <BaseTitle overlayText="Downloads" subtitle="Clique em um dos arquivos para realizar o download dos arquivos.">
      Área de <span>Downloads</span>
    </BaseTitle>

    <DownloadGrid>
      <Arquivo href={instrucoes} download="INSTRUCOES_PARA_OPERAR_O_ARTCAM_PARA_C.doc">

        <img src="/assets/images/downloads/doc.png" />
        
        <p>Instruções para operar o Artecam - Conversão de Arquivo do CorelDraw</p>
        <span>Documento</span>
      </Arquivo>

      <Arquivo href={calculoResina} download="CALCULO RESINA.xlsx">
        <img src="/assets/images/downloads/xls.png" />
        
        <p>Cálculo de Resina</p>
        <span>Documento</span>
      </Arquivo>

      <Arquivo>
        <img src="/assets/images/downloads/exe.png" />
        
        <p>Exemplo de arquivo de programa CNC</p>
        <span>Programa</span>
      </Arquivo>
    </DownloadGrid>

    <ButtonsGrid>
      <Button onClick={() => handleLogout()}>Sair</Button>
    </ButtonsGrid>
  </BaseSection>
  <Footer></Footer>

  </>
}

export default Downloads;