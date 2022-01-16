import styled from "styled-components"
import PropTypes from 'prop-types'; // ES6
import { laptop } from '../../../devices.js';

const Button = styled.div`
  width: 30px;
  height: 15px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;

  & span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #002F6A;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }

  & span:nth-child(1) {
    top: 4px;
  }

  & span:nth-child(2), span:nth-child(3) {
    top: 14px;
  }

  & span:nth-child(4) {
    top: 24px;
  }

  &.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  &.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

   &.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
   }

   @media screen and (min-width: ${laptop}) {
    display: none;
  }
`

const MenuIconMobile = ({ isOpen, setIsOpen }) => {
  return <Button onClick={() => {
    setIsOpen(!isOpen)

    document.body.style.overflow = !isOpen ? 'hidden' : 'auto'

    }} className={isOpen ? 'open' : ''}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
  </Button>
}

MenuIconMobile.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func
}

export default MenuIconMobile