import { useState } from "react";

import MenuIconMobile from "./MenuIconMobile";
import CTAButton from "../Buttons/CTAButton";

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

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import products from '../../../components/Product/products.json'
import filters from '../../../constants/filters.json'

const submenu = filters.categories.map(category => ({ type: 'category', label: category.label, id: category.id,  products: products.filter(product => product.category === category.id) }))
const submenuProduction = filters.production.map(production => ({ type: 'production', label: production.label, id: production.id }))

console.log('submenuProduction', submenuProduction)

const Header = ({ setIsActive, setProductionActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductSubmenuExpanded, expandProductSubmenu] = useState(false)
  const menuLabels = [
    { label: "Quem Somos", href: "/#quem-somos" },
    { label: "Serviços", href: "/#servicos" },
    { label: "Equipamentos por Categoria", href: '/#equipamentos', submenu, type: 'category' },
    { label: "Equipamentos por Demanda", href: '/#equipamentos', submenu: submenuProduction, type: 'production' },
    { label: "Vídeos", href: "/#videos" },
    { label: "Downloads", href: "/downloads" },
    { label: "Contato & Localização", href: "/#contato" },
  ];

  const scrollToEquipmentsSection = (id, type) => {
    window.location.href = '/#equipamentos'


    setTimeout(() => {
      if (id && type === 'category') {
        setIsActive(id)
        setProductionActive('')
        setIsOpen(false)

        document.getElementById('mainNavigation').querySelectorAll('li').forEach(element => element.blur())
      }
  
      if (id && type === 'production') {
        setProductionActive(id)
        setIsActive('')
        setIsOpen(false)
        document.getElementById('mainNavigation').querySelectorAll('li').forEach(element => {
          console.log('elemet', element)
          element.blur()
          element.style.pointerEvents = "auto"
        })
      }
    }, 300)
  }

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

            <a
              title="Instagram - New Resiquipe"
              href="http://instagram.com/newresiquipe"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Facebook" src="/assets/images/social/instagram.svg" />
            </a>
          </SocialGrid>

          <LogoGrid>
            <Link to="/">
            <Logo
              title="Logotipo New Resiquipe"
              src="/assets/images/logo-new-resiquipe.png"
            />
            </Link>
          </LogoGrid>

          <ButtonsGrid>
            <CTAButton
              iconSize={14}
              bgColor="#032F6A"
              title="Ir para loja virtual"
              href="https://newresiquipe.wixsite.com/newresiquipe"
              icon={faShoppingCart}
            >
              Loja Virtual
            </CTAButton>

            <CTAButton
              bgColor="#26D366"
              title="Fale conosco via WhatsApp"
              href="https://wa.me/5511981637814"
              icon={faWhatsapp}
            >
              Fale Conosco
            </CTAButton>
          </ButtonsGrid>

          <MenuIconMobile isOpen={isOpen} setIsOpen={setIsOpen} />
        </Wrapper>

        <Navigation id="mainNavigation" onClick={(e) => {
            e.stopPropagation();
              document.querySelectorAll('.submenu').forEach(e => {
                e.style.display = "none"
              })  

              
        }} onMouseLeave={
        () => {
                      expandProductSubmenu(false)
                    }} aria-expanded={isOpen} show={isOpen}>
                      <div className="navigation-content-grid">
        <NavigationLinks>
          {menuLabels.length &&
            menuLabels.map(({ label, href, submenu, type }, i) => {
              return (
                <li onClick={() => {
                  if (href !== '/#equipamentos') {
                  document.querySelectorAll('.submenu').forEach(e => {
                    e.style.display = "none"
                  })
                  }
                  window.location.href = href
                }} key={i}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (href === '/#equipamentos') {
                        scrollToEquipmentsSection('', type)

                        const element = document.getElementById(`submenu_${type}`)

                        if (element.style.display === "block") {
                          element.style.display = "none";
                        } else {
                          document.querySelectorAll('.submenu').forEach(e => {
                            e.style.display = "none"
                          })
                          element.style.display = "block";
                        }
                      } else {
                        setIsOpen(false);
                        document.querySelectorAll('.submenu').forEach(e => {
                          e.style.display = "none"
                        })
                      }
                      
                    }}
                    role="menuitem"
                  >
                    {label}

                    {submenu && <FontAwesomeIcon style={{ marginLeft: '5px' }} icon={faChevronDown} />}
                  </a>

                  {submenu && <ul id={`submenu_${type}`} className="submenu">{submenu.map(li => <li onClick={() => scrollToEquipmentsSection(li.id, li.type)}>{(li.products && window.innerWidth > 768) && <ul className="side-menu">{li.products.map(product => <li onClick={() => window.location.href = '/produto/'+product.id}>{product.title}</li>)}</ul>}{li.label}</li>)}</ul>}
                </li>
              );
            })}
        </NavigationLinks>

        <MobileButtonsGrid>
          <CTAButton
            iconSize={14}
            bgColor="#032F6A"
            title="Ir para loja virtual"
            href="https://newresiquipe.wixsite.com/newresiquipe"
            icon={faShoppingCart}
          >
            Loja Virtual
          </CTAButton>

          <CTAButton
            bgColor="#26D366"
            title="Fale conosco via WhatsApp"
            href="https://wa.me/5511981637814"
            icon={faWhatsapp}
          >
            Fale Conosco
          </CTAButton>
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

          <a
              title="Instagram - New Resiquipe"
              href="http://instagram.com/newresiquipe"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="Facebook" src="/assets/images/social/instagram.svg" />
            </a>
        </MobileSocialGrid>
        </div>
      </Navigation>
      </TopMenu>
    </>
  );
};

export default Header;
