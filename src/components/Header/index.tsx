import { useEffect, useState } from 'react';
import { Menu, X, Phone, Scale } from 'lucide-react';

import {
  HeaderWrap,
  ContainerNarrow,
  Row,
  Brand,
  BrandText,
  BrandStrong,
  DesktopNav,
  NavLink,
  DesktopCta,
  MobileButton,
  MobileNav,
  MobileNavInner,
  MobileCta,
} from './styles';

import logo from '../../assets/logo-branca-transparent.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Contato', href: '#contato' },
  ];

  // fecha menu ao voltar pra desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <HeaderWrap>
      <ContainerNarrow>
        <Row>
          {/* Logo */}
          <Brand href="#inicio" aria-label="Ir para início">
            <img src={logo} alt="Logo" />
            <BrandText>
              <BrandStrong>Advocacia </BrandStrong>
            </BrandText>
          </Brand>

          {/* Desktop Navigation */}
          <DesktopNav>
            {navItems.map(item => (
              <NavLink key={item.label} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </DesktopNav>

          {/* CTA Button (Desktop) */}
          <DesktopCta href="#contato">
            <Phone style={{ width: 16, height: 16 }} />
            Fale Conosco
          </DesktopCta>

          {/* Mobile Menu Button */}
          <MobileButton
            type="button"
            onClick={() => setIsMenuOpen(p => !p)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </MobileButton>
        </Row>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <MobileNav>
            <MobileNavInner>
              {navItems.map(item => (
                <NavLink
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}

              <MobileCta href="#contato" onClick={() => setIsMenuOpen(false)}>
                <Phone style={{ width: 16, height: 16 }} />
                Fale Conosco
              </MobileCta>
            </MobileNavInner>
          </MobileNav>
        )}
      </ContainerNarrow>
    </HeaderWrap>
  );
};

export default Header;
