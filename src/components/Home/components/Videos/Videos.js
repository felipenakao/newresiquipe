import styled from "styled-components";
import BaseSection from "../../../Global/BaseSection";
import BaseTitle from "../../../Global/BaseTitle";
import VideoCard from "./VideoCard";

import 'react-modal-video/scss/modal-video.scss';

import ModalVideo from 'react-modal-video'
import { useState } from "react";
import { laptopL, tablet } from "../../../../devices";

const VideosGrid = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${laptopL};
  margin: 60px auto;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const videos = [
  { id: 0, url: 'nf66BgABOTs', title: 'Aplicação de resina com Máquina Dosadora CNC', thumb: '/assets/images/videos/thumb-01.jpg' },
  { id: 1, url: 'NMFJy7p277s', title: 'Aplicação de resina com Máquina Dosadora CNC', thumb: '/assets/images/videos/thumb-04.jpg' },
  { id: 2, url: 'QgAYUjCSGDs', title: 'Aplicação de resina com Máquina Dosadora com Tanques', thumb: '/assets/images/videos/thumb-02.jpg' },
]

const Videos = () => {
  const [isOpen, setOpen] = useState('');
  return (
    <BaseSection id="videos">
      <BaseTitle
        overlayText="Vídeos"
        subtitle="Aqui você pode assistir uma demonstração dos nossos equipamentos."
      >
        Central de <span>Vídeos</span>
      </BaseTitle>

      <VideosGrid>
        {videos.map(({ id, title, thumb, url }) => {
        return (<VideoCard key={id} title={title} url={url} thumb={thumb} isOpen={isOpen} setOpen={setOpen} />)
        })}
      </VideosGrid>

      <ModalVideo channel='youtube' autoplay={1} isOpen={isOpen} videoId={isOpen} onClose={() => setOpen('')} />
    </BaseSection>
  );
};

export default Videos;
