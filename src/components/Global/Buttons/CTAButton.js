import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const Anchor = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  // background: #032F6A;
  /* background: #26D366; */
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  font-family: Prompt;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background: ${props => props.hover || ''}!important;
  }
`

const CTAButton = ({ href, title, icon, iconSize, children, bgColor, hover }) => {
  return (
    <Anchor
      hover={hover}
      style={{background: bgColor}}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      title={title}
    >
      <FontAwesomeIcon style={{ fontSize: iconSize || 20 }} icon={icon} />
      &nbsp;
      {children}
    </Anchor>
  )
}

export default CTAButton