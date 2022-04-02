import styled from 'styled-components';
import { laptop, laptopL } from '../../../devices.js';

export const TopMenu = styled.header`
  padding: 15px 30px;
  position: fixed;
  z-index: 9;
  background: #fff;
  width: calc(100% - 60px);

  @media screen and (min-width: ${laptop}) {
    padding: 30px;
    position: static
  }
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
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  width: calc(100% - 60px);
  position: fixed;
  padding: 45px 30px;
  transition-property: visibility, height;
  transition-duration: .5s;
  transition-timing-function: ease;
  height: ${props => props.show ? '100vh' : '0vh'};
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 8;
  top: 0px;

  @media screen and (min-width: ${laptop}) {
    padding: 0px;
    height: auto;
    width: 100%;
    visibility: visible;
    transition: none;
    position: sticky;
    top: 0px;
    overflow: visible;
  }
`;

export const NavigationLinks = styled.ul`
  margin: 0px;
  padding: 0px;
  text-align: center;

  & > li  {
    cursor: pointer;
    list-style-type: none;
    font-size: 18px;
    margin: 0px 0px 15px;
    position: relative;
    padding: 0px 10px;

    &:hover {
      background-color: #032F6A;
      color: white;

      & a {
        color: white;
      }

      & svg {
      color: #fff;
    }
    }

    & svg {
      color: #032F6A;
    }

    & > .submenu {
      font-size: 14px;
      display: none;
      width: 100%;
      color: #032F6A;
      font-family: Prompt;
      font-weight: 400;  
      padding: 0px;
      text-align: left;
      top: auto;
      left: 0px;
      background-color: #eee;
      border: 1px solid #032F6A;
      z-index: 9;
      position: absolute;

      @media screen and (min-width: ${laptop}) {
        width: 250px;
        top: 50px;
      }

      & li:hover {
        background-color: #1164E1;
        color: white;
      }

      & .side-menu {
        position: absolute;
        left: 250px;
        top: 0;
        background-color: #eee;
        border: 1px solid #032F6A;
        color: #032F6A;
        padding: 0;
        width: 250px;
        display: none;

        & li {
          padding: 15px;
        }

        & li:hover {
          background-color: #032F6A;
          color: #FECB00;
        }
      }

      & li {
        display: flex;
        padding: 0px 15px;
        align-items: center;
        list-style-type: none;
        height: 50px;
        margin: 0px;
        border-bottom: 1px solid rgba(255,255,255, .1);
        position: relative;
      }

      & a {
        text-decoration: none;
        color: white;
        font-family: Prompt;
        font-weight: 500;  

      }

      & li:hover .side-menu {
        display: block;
      }
    }

    &:hover .submenu {
      display: block;
    }
  }

  & > li > a {
    text-decoration: none;
    color: #032F6A;
    font-family: Prompt;
    font-weight: 500;  

    &:active, &:focus {
      color: var(--secondColor);
    }
  }

  @media screen and (min-width: ${laptop}) {
    display: flex;
    align-items: center;
    position: relative;
    gap: 30px;

    height: 50px;

    & > li  {
      font-size: 16px;
      margin: 0px;
      height: 50px;
      display: flex;
      align-items: center;
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

  & > a {
    margin: 0px 0px 15px;
  }

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


