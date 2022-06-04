import styled from "styled-components"
import BaseSection from "../Global/BaseSection"
import BaseTitle from "../Global/BaseTitle"
import Header from "../Global/Header/Header"

const VideosGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  font-family: Prompt;
  font-size: 13px;
  font-weight: 300;
  color: #072448;

  .video-grid {
    box-shadow: 0px 0px 10px rgb(0,0,0,.1);
    text-align: center;
    margin: 30px;
    border-radius: 15px;
    padding: 10px;
  }
`

const Restrito = () => {

  const videos = [
    { title: 'Identificação dos Registros', filename: 'A0.mp4' },
    { title: 'Identificando o Equipamento', filename: 'A1.mp4' },
    { title: 'Utilizando o Manômetro', filename: 'A2.mp4' },
    { title: 'Preparando a Máquina', filename: 'A3.mp4' },
    { title: 'Unidade de Limpeza', filename: 'A4.mp4' },
    { title: 'Bico Dosador e Mangueiras', filename: 'A5.mp4' },
    { title: 'Procedimento de Limpeza', filename: 'A6.mp4' },
  ]


  return (<>

<Header></Header>

<BaseSection>
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
</BaseSection>
</>)

}

export default Restrito
