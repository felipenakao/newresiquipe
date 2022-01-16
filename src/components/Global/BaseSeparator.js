import styled from 'styled-components'

const Line = styled.hr`
  background: #EFEFEF;
  border: 0px;
  height: 1px;
  box-shadow: 0px 0px 10px #ccc;
`

const BaseSeparator = () => {
  return <Line />
}

export default BaseSeparator