import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

import {
  Section,
  Narrow,
  Grid,
  InfoCol,
  AccentLine,
  Title,
  GoldGradient,
  Subtitle,
  InfoList,
  InfoItem,
  IconBox,
  InfoMeta,
  InfoLabel,
  InfoValueLink,
  InfoValueText,
  FormCard,
  FormTitle,
  Form,
  Row2,
  Input,
  Textarea,
  SubmitBtn,
} from './styles';

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefone',
    value: '(41) 98754-2745',
    href: 'tel:+5541987542745',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'advocaciacarinafn@gmail.com',
    href: 'mailto:advocaciacarinafn@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value:
      'Condomínio Edifício Maringa - R. Cândido Lopes, 146 - Centro, Curitiba - PR, 80020-060, Brasil',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Horário',
    value: 'Seg - Sex: 9h às 18h',
    href: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <Section id="contato">
      <Narrow>
        <Grid>
          {/* Contact Info */}
          <InfoCol>
            <AccentLine />
            <Title>
              Entre em <GoldGradient>Contato</GoldGradient>
            </Title>
            <Subtitle>
              Estamos prontos para atendê-lo. Entre em contato conosco e agende
              uma consulta para discutir seu caso.
            </Subtitle>

            <InfoList>
              {contactInfo.map(info => (
                <InfoItem key={info.label}>
                  <IconBox>
                    <info.icon />
                  </IconBox>

                  <InfoMeta>
                    <InfoLabel>{info.label}</InfoLabel>

                    {info.href ? (
                      <InfoValueLink href={info.href}>
                        {info.value}
                      </InfoValueLink>
                    ) : (
                      <InfoValueText>{info.value}</InfoValueText>
                    )}
                  </InfoMeta>
                </InfoItem>
              ))}
            </InfoList>
          </InfoCol>

          {/* Contact Form */}
          <FormCard>
            <FormTitle>Envie sua Mensagem</FormTitle>

            <Form onSubmit={handleSubmit}>
              <Row2>
                <Input
                  type="text"
                  placeholder="Seu Nome"
                  value={formData.name}
                  onChange={e =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
                <Input
                  type="email"
                  placeholder="Seu E-mail"
                  value={formData.email}
                  onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </Row2>

              <Row2>
                <Input
                  type="tel"
                  placeholder="Seu Telefone"
                  value={formData.phone}
                  onChange={e =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                <Input
                  type="text"
                  placeholder="Assunto"
                  value={formData.subject}
                  onChange={e =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                />
              </Row2>

              <Textarea
                placeholder="Sua Mensagem"
                value={formData.message}
                onChange={e =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                required
              />

              <SubmitBtn type="submit">
                <Send />
                Enviar Mensagem
              </SubmitBtn>
            </Form>
          </FormCard>
        </Grid>
      </Narrow>
    </Section>
  );
};

export default Contact;
