import { screen, render } from '@testing-library/react'
import Header from './Header';

describe('<Header />', () => {

  render(<Header />)

  it('should hamburguer button handle open/close full menu', () => {

    // verifica se o menu existe
    const mobileFullMenu = screen.getByRole('navigation')

    expect(mobileFullMenu).toHaveStyle({ opacity: 0 })
  })
})