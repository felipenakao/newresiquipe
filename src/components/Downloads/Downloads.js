import Helmet from "react-helmet";
import styled from "styled-components";
import { tablet } from "../../devices";
import BaseSection from "../Global/BaseSection";
import BaseTitle from "../Global/BaseTitle";
import Footer from "../Global/Footer";
import Header from "../Global/Header/Header";

import calculoResina from "./files/CALCULO RESINA.xlsx"
import instrucoes from "./files/INSTRUCOES_PARA_OPERAR_O_ARTCAM_PARA_C.doc"
import mach3 from "./files/Mach3.rar"
import resinador from "./files/resinador.rar"

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

const VideosGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  font-family: Prompt;
  font-size: 13px;
  font-weight: 300;
  color: #072448;

  .video-grid {
    border: 1px solid #eee;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
    text-align: center;
    margin: 15px;
    border-radius: 15px;
    padding: 10px;
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
  const videos = [
    { title: 'Identificação dos Registros', filename: 'A0.mp4' },
    { title: 'Identificando o Equipamento', filename: 'A1.mp4' },
    { title: 'Utilizando o Manômetro', filename: 'A2.mp4' },
    { title: 'Preparando a Máquina', filename: 'A3.mp4' },
    { title: 'Unidade de Limpeza', filename: 'A4.mp4' },
    { title: 'Bico Dosador e Mangueiras', filename: 'A5.mp4' },
    { title: 'Procedimento de Limpeza', filename: 'A6.mp4' },
  ]
  return <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>New Resiquipe -  Área de Downloads</title>
    <meta name="description" content="Área de dowloads de documentos e instruções para operar os equipamentos." />
  </Helmet>

  <Header></Header>

  <BaseSection>
    <BaseTitle overlayText="Downloads" subtitle="Clique em um dos arquivos para realizar o download.">
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

      <Arquivo href={mach3} download="Mach3.rar">
        <img src="/assets/images/downloads/rar.png" />
        
        <p>Mach3</p>
        <span>Arquivo .rar</span>
      </Arquivo>

      <Arquivo href={resinador} download="resinador.rar">
        <img src="/assets/images/downloads/rar.png" />
        
        <p>Resinador</p>
        <span>Arquivo .rar</span>
      </Arquivo>

      {/* <Arquivo>
        <img src="/assets/images/downloads/exe.png" />
        
        <p>Exemplo de arquivo de programa CNC</p>
        <span>Programa</span>
      </Arquivo> */}
    </DownloadGrid>

    <BaseTitle overlayText="Downloads" subtitle="Abaixo você consegue assistir aos vídeos de treinamento.">
    Vídeos de <span>Treinamento</span>
  </BaseTitle>

  <div class="container">
    <VideosGrid class="videos-treinamento-grid">
      {videos.map(video => (
        <div class="video-grid">
          <h3>{video.title}</h3>

          <div class="video">
            <object width="450" height="750">
                <video width="350" controls>
                <source src={`/videos/${video.filename}`} type="video/mp4" />
                Your browser does not support HTML5 video.
                </video>
            </object>
          </div>
        </div>
      ))}
    </VideosGrid>
  </div>

    <ButtonsGrid>
      <Button onClick={() => handleLogout()}>Sair</Button>
    </ButtonsGrid>
  </BaseSection>
  <Footer></Footer>

  </>
}

export default Downloads;