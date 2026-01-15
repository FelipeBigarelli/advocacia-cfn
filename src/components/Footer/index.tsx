import { Facebook, Instagram, Linkedin, Scale } from 'lucide-react';

import {
  FooterWrap,
  Narrow,
  TopGrid,
  BrandCol,
  BrandRow,
  BrandText,
  BrandStrong,
  AboutText,
  ColTitle,
  LinksList,
  LinkItem,
  FooterLink,
  SocialRow,
  SocialBtn,
  BottomBar,
  BottomText,
} from './styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = ['Início', 'Sobre', 'Areas', 'Equipe', 'Contato'];

  const makeAnchor = (label: string) =>
    `#${label.toLowerCase().replace(/ /g, '-')}`;

  return (
    <FooterWrap>
      <Narrow>
        <TopGrid>
          {/* Logo & About */}
          <BrandCol>
            <BrandRow>
              <Scale style={{ width: 40, height: 40 }} />
              <BrandText>
                <BrandStrong>CFN</BrandStrong> Advocacia
              </BrandText>
            </BrandRow>

            <AboutText>
              CFN Advocacia - Tradição, ética e compromisso na defesa dos seus
              direitos, oferecendo soluções jurídicas de excelência.
            </AboutText>
          </BrandCol>

          {/* Quick Links */}
          <div>
            <ColTitle>Links Rápidos</ColTitle>

            <LinksList>
              {quickLinks.map(item => (
                <LinkItem key={item}>
                  <FooterLink href={makeAnchor(item)}>{item}</FooterLink>
                </LinkItem>
              ))}
            </LinksList>
          </div>

          {/* Social */}
          <div>
            <ColTitle>Redes Sociais</ColTitle>

            <SocialRow>
              <SocialBtn
                href="https://www.facebook.com/profile.php?id=100092683307446"
                aria-label="Facebook"
              >
                <Facebook />
              </SocialBtn>
              <SocialBtn
                href="https://www.instagram.com/adv.carinafranconogueira/"
                aria-label="Instagram"
              >
                <Instagram />
              </SocialBtn>
              <SocialBtn href="#" aria-label="LinkedIn">
                <Linkedin />
              </SocialBtn>
            </SocialRow>
          </div>
        </TopGrid>

        {/* Bottom Bar */}
        <BottomBar>
          <BottomText>
            © {currentYear} CFN Advocacia. Todos os direitos reservados.
          </BottomText>
          <BottomText>OAB/PR 129.720</BottomText>
        </BottomBar>
      </Narrow>
    </FooterWrap>
  );
};

export default Footer;
