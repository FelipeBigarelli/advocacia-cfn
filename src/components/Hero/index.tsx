import { ArrowDown } from 'lucide-react';
import heroImage from '../../assets/hero-law-office.jpg';

import {
  Section,
  Bg,
  BgImg,
  Overlay,
  Content,
  Narrow,
  Block,
  AccentLine,
  Title,
  GoldGradient,
  Text,
  Actions,
  PrimaryCta,
  SecondaryCta,
  ScrollHint,
} from './styles';

const Hero = () => {
  return (
    <Section id="inicio">
      {/* Background Image */}
      <Bg>
        <BgImg src={heroImage} alt="Escritório de Advocacia CFN" />
        <Overlay />
      </Bg>

      {/* Content */}
      <Content>
        <Narrow>
          <Block>
            <AccentLine />

            <Title>
              CFN <GoldGradient>Advocacia</GoldGradient>
            </Title>

            <Text style={{ animationDelay: '0.2s' }}>
              Defendendo seus direitos com dedicação, ética e compromisso.
              Soluções jurídicas personalizadas para você e sua empresa.
            </Text>

            <Actions style={{ animationDelay: '0.4s' }}>
              <PrimaryCta href="#contato">Agende uma Consulta</PrimaryCta>
              <SecondaryCta href="#areas">Conheça Nossos Serviços</SecondaryCta>
            </Actions>
          </Block>
        </Narrow>
      </Content>

      {/* Scroll indicator */}
      <ScrollHint href="#sobre" aria-label="Rolar para baixo">
        <ArrowDown />
      </ScrollHint>
    </Section>
  );
};

export default Hero;
