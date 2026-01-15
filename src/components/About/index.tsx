import { Scale, Award, Users, Clock } from 'lucide-react';

import {
  Section,
  Narrow,
  Grid,
  Content,
  AccentLine,
  Title,
  GoldGradient,
  Paragraph,
  TeamLink,
  Arrow,
  StatsGrid,
  StatCard,
  StatIcon,
  StatValue,
  StatLabel,
} from './styles';

const stats = [
  { icon: Scale, value: '2+', label: 'Anos de Experiência' },
  { icon: Award, value: '30+', label: 'Casos de Sucesso' },
  { icon: Users, value: '50+', label: 'Clientes Satisfeitos' },
  { icon: Clock, value: '24h', label: 'Suporte Dedicado' },
];

const About = () => {
  return (
    <Section id="sobre">
      <Narrow>
        <Grid>
          {/* Content */}
          <Content>
            <AccentLine />

            <Title>
              Tradição e Modernidade em <GoldGradient>Advocacia</GoldGradient>
            </Title>

            <Paragraph>
              O escritório CFN Advocacia nasceu do compromisso inabalável com a
              justiça e a defesa dos direitos de nossos clientes. Nossa equipe
              de advogados altamente qualificados combina conhecimento jurídico
              sólido com uma abordagem humanizada e personalizada.
            </Paragraph>

            <Paragraph style={{ marginBottom: 28 }}>
              Atuamos nas mais diversas áreas do Direito, sempre buscando as
              melhores soluções para cada caso. Nossa missão é transformar a
              complexidade jurídica em resultados concretos para nossos
              clientes.
            </Paragraph>

            <TeamLink href="#equipe">
              Conheça Nossa Equipe <Arrow>→</Arrow>
            </TeamLink>
          </Content>

          {/* Stats Grid */}
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <StatIcon as={stat.icon} />
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </Grid>
      </Narrow>
    </Section>
  );
};

export default About;
