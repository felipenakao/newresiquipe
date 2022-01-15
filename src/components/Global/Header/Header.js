import { useState } from "react";

import WhatsAppButton from "../Buttons/WhatsAppButton";
import MenuIconMobile from "./MenuIconMobile";
import ShoppingCartButton from '../Buttons/ShoppingCartButton'
import {
  TopMenu,
  Wrapper,
  Navigation,
  MobileSocialGrid,
  NavigationLinks,
  Logo,
  LogoGrid,
  MobileButtonsGrid,
  ButtonsGrid,
  SocialGrid,
} from "./styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuLabels = [
    { label: "Quem Somos", href: "#" },
    { label: "Serviços", href: "#" },
    { label: "Equipamentos", href: "#" },
    { label: "Central de Vídeos", href: "#" },
    { label: "Contato & Localização", href: "#" },
  ];

  return (
    <>
      <TopMenu>
        <Wrapper>
        <SocialGrid>
          <a
            title="Youtube - New Resiquipe"
            href="https://www.youtube.com/user/resiquipe"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="Youtube" src="/assets/images/social/youtube.svg" />
          </a>

          <a
            title="Facebook - New Resiquipe"
            href="https://www.facebook.com/newresiquipe.equipamentospararesinagem.3"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="Facebook" src="/assets/images/social/facebook.svg" />
          </a>
        </SocialGrid>

        <LogoGrid>
          <Logo
            title="Logotipo New Resiquipe"
            src="/assets/images/logo-new-resiquipe.png"
          />
        </LogoGrid>

        <ButtonsGrid>
          <ShoppingCartButton />

          <WhatsAppButton />
        </ButtonsGrid>

        <MenuIconMobile isOpen={isOpen} setIsOpen={setIsOpen} />

        </Wrapper>
      </TopMenu>

      <Navigation aria-expanded={isOpen} show={isOpen}>
        <NavigationLinks>
          {menuLabels.length &&
            menuLabels.map(({ label, href }, i) => {
              return (
                <li key={i}>
                  <a
                    href={href}
                    onClick={() => setIsOpen(!isOpen)}
                    role="menuitem"
                  >
                    {label}
                  </a>
                </li>
              );
            })}
        </NavigationLinks>

        <MobileButtonsGrid>
          <ShoppingCartButton />

          <WhatsAppButton />
        </MobileButtonsGrid>

        <MobileSocialGrid>
          <a
            title="Youtube - New Resiquipe"
            href="https://www.youtube.com/user/resiquipe"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="Youtube" src="/assets/images/social/youtube.svg" />
          </a>

          <a
            title="Facebook - New Resiquipe"
            href="https://www.facebook.com/newresiquipe.equipamentospararesinagem.3"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="Facebook" src="/assets/images/social/facebook.svg" />
          </a>
        </MobileSocialGrid>

      </Navigation>
    </>
  );
};

export default Header;
