import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Anchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background: #032F6A;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  font-family: Prompt;
  font-size: 14px;
  font-weight: 500;
  margin: 0px 0px 15px;
`

const ShoppingCartButton = () => {
  return (
    <Anchor
      href="https://newresiquipe.mercadoshops.com.br/"
      rel="noopener noreferrer"
      target="_blank"
      title="Ir para loja virtual"
    >
      <FontAwesomeIcon style={{ fontSize: 14 }} icon={faShoppingCart} />
      &nbsp;
      Loja Virtual
    </Anchor>
  )
}

export default ShoppingCartButton