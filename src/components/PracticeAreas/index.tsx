import {
  Briefcase,
  Building2,
  Users,
  FileText,
  ShieldCheck,
  Landmark,
} from 'lucide-react';

import {
  Section,
  Narrow,
  Header,
  AccentLine,
  Title,
  GoldGradient,
  Subtitle,
  Grid,
  Card,
  IconWrap,
  CardTitle,
  CardText,
} from './styles';

const areas = [
  {
    icon: Briefcase,
    title: 'Direito Trabalhista',
    description:
      'Defesa dos direitos do trabalhador e assessoria empresarial em questões trabalhistas.',
  },
  {
    icon: Building2,
    title: 'Direito Empresarial',
    description:
      'Consultoria jurídica para empresas, contratos, fusões e aquisições.',
  },
  {
    icon: Users,
    title: 'Direito de Família',
    description:
      'Divórcios, inventários, pensão alimentícia e guarda de menores.',
  },
  {
    icon: FileText,
    title: 'Direito Civil',
    description:
      'Contratos, responsabilidade civil, direito do consumidor e indenizações.',
  },
  {
    icon: ShieldCheck,
    title: 'Direito Previdenciário',
    description:
      'Aposentadorias, benefícios do INSS e revisões previdenciárias.',
  },
  {
    icon: Landmark,
    title: 'Direito Tributário',
    description:
      'Planejamento tributário, defesas fiscais e recuperação de tributos.',
  },
];

const PracticeAreas = () => {
  return (
    <Section id="areas">
      <Narrow>
        {/* Header */}
        <Header>
          <AccentLine />
          <Title>
            Áreas de <GoldGradient>Atuação</GoldGradient>
          </Title>
          <Subtitle>
            Nossa equipe possui expertise em diversas áreas do Direito,
            oferecendo soluções completas e personalizadas para cada
            necessidade.
          </Subtitle>
        </Header>

        {/* Areas Grid */}
        <Grid>
          {areas.map((area, index) => (
            <Card
              key={area.title}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <IconWrap>
                <area.icon />
              </IconWrap>

              <CardTitle>{area.title}</CardTitle>
              <CardText>{area.description}</CardText>
            </Card>
          ))}
        </Grid>
      </Narrow>
    </Section>
  );
};

export default PracticeAreas;
