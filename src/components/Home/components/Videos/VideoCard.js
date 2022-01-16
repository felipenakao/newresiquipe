import styled from "styled-components";
import { tablet } from "../../../../devices";

const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0px 0px;
  cursor: pointer;

  @media screen and (min-width: ${tablet}) {
    margin: 30px;
    max-width: 350px;
  }
`;

const VideoCardThumbGrid = styled.div`
  position: relative;
  background-image: ${(props) => (props.thumb ? `url(${props.thumb})` : "")};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;

  &:hover div.circle{
    background: var(--secondColor);
    transform: scale(1.05);
    transition: transform .5s ease-in-out;
  }

  @media screen and (min-width: ${tablet}){
    min-width: 350px;
    max-width: 350px;
  }
`;

const VideoCardTitle = styled.h3`
  font-family: "Prompt";
  color: var(--textColor);
  font-size: 16px;
  text-align: center;
`;

const PlayButtonCircle = styled.div`
  transition: transform .5s ease-in-out;
  background: var(--highlightColor);
  padding: 15px;
  border-radius: 100%;
  max-width: 30px;
  max-height: 30px;
  left: 150px;
  top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayButtonIcon = styled.img`
  position: relative;
  width: 30px;
  height: 30px;
  margin-left: 5px;
`;

const VideoCard = ({ title, thumb, url, setOpen, isOpen }) => {
  return (
    <VideoCardContainer onClick={() => setOpen(url)}>
      <VideoCardThumbGrid thumb={thumb}>
        <PlayButtonCircle className="circle">
          <PlayButtonIcon src="/assets/images/videos/play.svg" />
        </PlayButtonCircle>
      </VideoCardThumbGrid>
      <VideoCardTitle>{title}</VideoCardTitle>
    </VideoCardContainer>
  );
};

export default VideoCard;
