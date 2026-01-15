import { Linkedin, Mail } from 'lucide-react';

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
  ImageWrap,
  Photo,
  Overlay,
  Socials,
  SocialBtn,
  Info,
  Name,
  Role,
  Specialty,
} from './styles';

import carina from '../../assets/carina.png';

const team = [
  {
    name: 'Dra. Carina F. Nogueira',
    role: 'Sócia Fundadora',
    specialty: 'Direito Trabalhista e Tributário',
    image: carina,
  },
  {
    name: 'Dra. Carina F. Nogueira',
    role: 'Sócia Fundadora',
    specialty: 'Direito Trabalhista e Tributário',
    image: carina,
  },
  {
    name: 'Dra. Carina F. Nogueira',
    role: 'Sócia Fundadora',
    specialty: 'Direito Trabalhista e Tributário',
    image: carina,
  },
];

const Team = () => {
  return (
    <Section id="equipe">
      <Narrow>
        <Header>
          <AccentLine />
          <Title>
            Nossa <GoldGradient>Equipe</GoldGradient>
          </Title>
          <Subtitle>
            Profissionais altamente qualificados e comprometidos com a
            excelência jurídica e o atendimento humanizado.
          </Subtitle>
        </Header>

        <Grid>
          {team.map((member, index) => (
            <Card
              key={member.name}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <ImageWrap>
                <Photo src={member.image} alt={member.name} />
                <Overlay />

                <Socials>
                  <SocialBtn href="#" aria-label="LinkedIn">
                    <Linkedin />
                  </SocialBtn>
                  <SocialBtn href="#" aria-label="Email">
                    <Mail />
                  </SocialBtn>
                </Socials>
              </ImageWrap>

              <Info>
                <Name>{member.name}</Name>
                <Role>{member.role}</Role>
                <Specialty>{member.specialty}</Specialty>
              </Info>
            </Card>
          ))}
        </Grid>
      </Narrow>
    </Section>
  );
};

export default Team;
