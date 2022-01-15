import styled from 'styled-components';
import { laptop, laptopL } from '../../../devices.js';

export const TopMenu = styled.header`
  padding: 30px;
`;

export const Wrapper = styled.div`
  max-width: ${laptopL};
  margin: auto;
  display: flex;
  justify-content: space-between;
`

export const LogoGrid = styled.div`
  @media screen and (min-width: ${laptop}) {
    width: 33%;
    display: flex;
    justify-content: center;
  }
`

export const Logo = styled.img`
  width: 150px;
  object-fit: contain;

  @media screen and (min-width: ${laptop}) {
    width: 200px;
  }
`

export const MobileMenuIcon = styled.div`
  display: flex;
  align-items: center;
  color: #032F6A;

  & > svg {
    font-size: 24px;
  }

  @media screen and (min-width: ${laptop}) {
    display: none;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  background: #FECB00;
  opacity: ${props => props.show ? '1' : '0'};
  width: calc(100vw - 60px);
  position: absolute;
  padding: 30px;
  transition-property: opacity, height;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
  height: ${props => props.show ? 'calc(100vh - 118px)' : '0px'};
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (min-width: ${laptop}) {
    padding: 15px;
    height: 30px;
    width: 100vw;
    opacity: 1;
    transition: none;
  }
`;

export const NavigationLinks = styled.ul`
  margin: 0px;
  padding: 0px;
  text-align: center;

  & > li  {
    list-style-type: none;
    font-size: 18px;
    margin: 0px 0px 15px;
  }

  & > li > a {
    text-decoration: none;
    color: #032F6A;
    font-family: Prompt;
    font-weight: 500;  
  }

  @media screen and (min-width: ${laptop}) {
    display: flex;
    align-items: center;
    gap: 60px;

    & > li  {
      font-size: 16px;
      margin: 0px;
    }
  }
`;

export const MobileSocialGrid = styled.div`
  display: flex;
  justify-content: center;

  & > a {
    margin: 0px 5px 30px;
  }

  & > a > img {
    max-width: 36px;
  }

  @media screen and (min-width: ${laptop}) {
    display: none;
  }
`;

export const SocialGrid = styled.div`
  width: 33%;
  align-items: center;
  display: flex;
  justify-content: flex-start;

  & > a {
    margin: 0px 5px;
  }

  & > a > img {
    max-width: 28px;
  }

  @media screen and (max-width: ${laptop}) {
    display: none;
  }
` 

export const MobileButtonsGrid = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px;

  @media screen and (min-width: ${laptop}) {
    display: none;
  }
`

export const ButtonsGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 33%;
  gap: 10px;

  & > a {
    margin: 0px;
  }

  @media screen and (max-width: ${laptop}) {
    display: none;
  }
`
