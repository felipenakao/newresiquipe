import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { laptopL, tablet } from "../../devices";
import CTAButton from "./Buttons/CTAButton";

const FooterContainer = styled.footer`
  background: var(--textColor);
  padding: 30px;
  color: #fff;
  font-family: Prompt;
`;

const FooterContent = styled.div`
  display: flex;
  max-width: ${laptopL};
  margin: auto;
  flex-direction: column;

  @media screen and (min-width: ${tablet}){
    flex-direction: row;
    justify-content: space-between;
  }
`;

const MapGrid = styled.div`
  margin: 15px 0px;

  & iframe {
    border-radius: 15px;
  }

  @media screen and (min-width: ${tablet}){
    flex-grow: .5;
  }
`;

const ContactInfoGrid = styled.div`
  margin: 15px 0px;
`;

const FooterTitle = styled.h2`
  font-size: 18px;
  margin-top: 0px;
`;

const FooterSubtitle = styled.h3`
  font-size: 14px;
`;

const FooterText = styled.p`
  font-size: 14px;
`;

const LinksGrid = styled.div`
  margin: 15px 0px;
  & a {
    color: #fff;
  }
`;

const ButtonsGrid = styled.div`
  margin: 15px 0px;
  display: flex;
  flex-direction: column;

  & > div {
    margin: 0px 0px 15px
  }
`;

const FooterBottom = styled.div`
  max-width: ${laptopL};
  margin: auto;
  display: flex;
  flex-direction: column-reverse;

  border-top: #003377 solid 1px;
  margin-top: 15px;
  padding-top: 30px;

  @media screen and (min-width: ${tablet}){
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterLogo = styled.img` 
  width: 150px;
  object-fit: contain;
  margin: auto;

  @media screen and (min-width: ${tablet}){
    margin: 0px;
  }
`;
const Copyright = styled.p`
  font-size: 14px;
  margin: 15px 0px 30px;
`;
const FooterSocialGrid = styled.div`
  text-align: center;

  & a {
    margin: 0px 5px;
  }

  & img {
    width: 36px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer id="contato">
      <FooterContent>
        <MapGrid>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.7956335641466!2d-46.710700184691!3d-23.683265371991215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce502b6e780723%3A0xd2945d1c0327147b!2sNew%20Resiquipe!5e0!3m2!1spt-BR!2sbr!4v1642367936899!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </MapGrid>

        <ContactInfoGrid>
          <FooterTitle>Contato e Localização</FooterTitle>

          <FooterSubtitle>Endereço:</FooterSubtitle>
          <FooterText>
            Rua Lido 276 - CASA 2,<br/>Veleiros - São Paulo, SP<br/>CEP: 04773-000
          </FooterText>

          <FooterSubtitle>Telefones / WhatsApp:</FooterSubtitle>
          <FooterText>(11) 5685-4723<br/>(11) 98163-7814</FooterText>

          <FooterSubtitle>E-mail:</FooterSubtitle>
          <FooterText>newresiquipe@newresiquipe.com</FooterText>
        </ContactInfoGrid>

        <LinksGrid>
          <FooterTitle>Links Rápidos</FooterTitle>
          <a href="#quem-somos"><FooterText>Quem Somos</FooterText></a>
          <a href="#servicos"><FooterText>Serviços</FooterText></a>
          <a href="#equipamentos"><FooterText>Equipamentos</FooterText></a>
          <a href="#videos"><FooterText>Central de Vídeos</FooterText></a>
        </LinksGrid>

        <ButtonsGrid>
        <div>
            <CTAButton
              bgColor="#26D366"
              title="Fale conosco via WhatsApp"
              href="https://wa.me/5511981637814"
              icon={faWhatsapp}
            >
              Fale Conosco
            </CTAButton>
            </div>
          <div>
          <CTAButton
              iconSize={14}
              bgColor="#032F6A"
              title="Ir para loja virtual"
              href="https://newresiquipe.wixsite.com/newresiquipe"
              icon={faShoppingCart}
            >
              Loja Virtual
            </CTAButton>
          </div>

            <div>
            {/* <CTAButton
          iconSize={14}
          bgColor="#DD335A"
          title="Baixar catálogo em .PDF"
          href="#"
          icon={faFilePdf}
        >
          Baixar Catálogo
        </CTAButton> */}
        </div>


        </ButtonsGrid>
      </FooterContent>
      <FooterBottom>

        <FooterLogo src="/assets/images/footer/logo-footer@2x.png" />

        <Copyright>New Resiquipe Imp/Exp e Com. de Máquinas Ltda | CNPJ: 08.014.083/0001-80 | Todos os direitos reservados</Copyright>

        <FooterSocialGrid>
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

            <a
              title="Instagram - New Resiquipe"
              href="https://www.instagram.com/newresiquipe/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Facebook" src="/assets/images/social/instagram.svg" />
            </a>
        </FooterSocialGrid>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
