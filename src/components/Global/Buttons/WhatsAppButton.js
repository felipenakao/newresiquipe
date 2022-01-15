import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

const Anchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  // background: #032F6A;
  background: #26D366;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  font-family: Prompt;
  font-size: 14px;
  font-weight: 500;
  margin: 0px 0px 15px;
`

const WhatsAppButton = () => {
  return (
    <Anchor
      href="https://wa.me/5511981637814"
      rel="noopener noreferrer"
      target="_blank"
      title="Fale conosco via WhatsApp"
    >
      <FontAwesomeIcon style={{ fontSize: 20 }} icon={faWhatsapp} />
      &nbsp;
      Fale Conosco
    </Anchor>
  )
}

export default WhatsAppButton