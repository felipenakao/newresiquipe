import { screen, fireEvent, render } from '@testing-library/react'
import Header from './Header';

describe('<Header />', () => {
  render(<Header />)
  // verifica se o menu existe
  const mobileNavigation = screen.getByRole('navigation', { hidden: true });
  const mobileMenuButton = screen.getByTitle('Abrir/Fechar menu');
  // const mobileNavigationLinks = screen.getAllByRole('menuitem');
  const youtubeIcon = screen.getByAltText('Youtube');
  const youtubeAnchor = screen.getByTitle('Youtube - New Resiquipe');
  const facebookIcon = screen.getByAltText('Facebook');
  const facebookAnchor = screen.getByTitle('Facebook - New Resiquipe');
  const logo = screen.getByTitle('Logotipo New Resiquipe');

  it('should MobileMenuIcon handle open/close full menu on click', () => {
    expect(mobileNavigation).toHaveStyle({ opacity: 0 });

    fireEvent.click(mobileMenuButton);
    expect(mobileNavigation).toHaveStyle({ opacity: 1 });

    fireEvent.click(mobileMenuButton);
    expect(mobileNavigation).toHaveStyle({ opacity: 0 });
  });

  it('should social icons redirect to correct page', () => {
    expect(youtubeIcon.src).toContain('/assets/images/social/youtube.svg');
    expect(facebookIcon.src).toContain('/assets/images/social/facebook.svg');

    expect(youtubeAnchor.href).toContain('https://www.youtube.com/user/resiquipe');
    expect(facebookAnchor.href).toContain('https://www.facebook.com/newresiquipe.equipamentospararesinagem.3');
  });

  it('should header has logo', () => {
    render(<Header />)

    expect(logo.src).toContain('/assets/images/logo-new-resiquipe.png')
  })

  it('should shopping cart button redirect to shop page', () => {
    render(<Header />)
    const shopButton = screen.getByTitle('Ir para loja virtual');

    expect(shopButton).toHaveTextContent('Loja Virtual')
    expect(shopButton.href).toBe('https://newresiquipe.mercadoshops.com.br/')
  })

  it('should whatsapp button redirect to chat', () => {
    render(<Header />)
    const whatsappButton = screen.getByTitle('Fale conosco via WhatsApp')
    const href = 'https://wa.me/5511981637814'

    expect(whatsappButton).toHaveTextContent('Fale Conosco')
    expect(whatsappButton.href).toBe(href)
  })
  
})